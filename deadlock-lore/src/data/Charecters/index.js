 import personagemA from "./personagem.json"    
 
 export const CHARACTERS = [personagem1]
 export const byId = Object.fromEntries(CHARACTERS.map((c) => [c.id, c]));