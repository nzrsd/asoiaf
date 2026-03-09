import { useParams } from "react-router-dom";
import characters from "../data/characters.json";

export default function CharacterDetail() {
  const { id } = useParams();
  const character = characters.find((char) => char.id === id);

  if (!character) return <p>Character not found.</p>;

  return (
    <div className="max-w-xl mx-auto p-4 dark:bg-gray-900 rounded">
      <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
      <p><strong>House:</strong> {character.house}</p>
      <p><strong>Born:</strong> {character.born}</p>
      <p><strong>Died:</strong> {character.died}</p>
      <p><strong>Title:</strong> {character.title}</p>
      <p><strong>Parents:</strong> {character.parents}</p>
      <p><strong>Siblings:</strong> {character.siblings}</p>
      <p><strong>Spouse:</strong> {character.spouse}</p>
      <p><strong>Children:</strong> {character.children}</p>
      <p><strong>Nickname:</strong> {character.nickname}</p>
      <p><strong>Dragon:</strong> {character.dragon}</p>
      <p><strong>Life:</strong> {character.bio}</p>
      {/* <p className="mt-4">{character.bio}</p> */}
    </div>
  );
}
