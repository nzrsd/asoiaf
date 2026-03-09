import characters from "../data/characters.json";
import { Link } from "react-router-dom"; // ✅ import Link

// Grouping logic stays the same
const groupCharacters = (chars) => {
  const groups = {};
  chars.forEach((char) => {
    const letter = char.name[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(char);
  });

  for (const letter in groups) {
    groups[letter].sort((a, b) => a.name.localeCompare(b.name));
  }

  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
};

export default function Characters() {
  const grouped = groupCharacters(characters);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Character Profiles</h2>

      {grouped.map(([letter, chars]) => (
        <div key={letter} className="mb-8">
          <h3 className="text-xl font-bold mb-2">{letter}</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chars.map((char) => (
              <li key={char.id} className="border p-4 rounded shadow dark:bg-gray-800">
                <h4 className="text-lg font-semibold">
                  <Link to={`/characters/${char.id}`} className="text-blue-600 dark:text-blue-400">
                    {char.name}
                  </Link>
                </h4>
                
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
