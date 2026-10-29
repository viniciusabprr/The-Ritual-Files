import { CHARACTERS, byId } from "./data/Charecters/personagem.json"
import { LOCATIONS, locationById } from "./data/Locations/local.json";

export default function App() {
  return (
    <div className="p-6 text-white bg-[#1e2230] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Teste dos dados</h1>

      {CHARACTERS.map((c) => (
        <div key={c.id} className="mb-4">
          <h2 className="font-semibold">{c.name} ({c.faction})</h2>
          <p>Locais: {c.locations.map((id) => locationById[id]?.name ?? `❌ ${id}`).join(", ")}</p>
          <p>Conexões: {c.relationships.map((r) => byId[r.id]?.name ?? `❌ ${r.id}`).join(", ")}</p>
        </div>
      ))}

      {LOCATIONS.map((l) => (
        <div key={l.id} className="mb-4">
          <h2 className="font-semibold">{l.name}</h2>
          <p>Personagens: {l.characters.map((id) => byId[id]?.name ?? `❌ ${id}`).join(", ")}</p>
        </div>
      ))}
    </div>
  );
}