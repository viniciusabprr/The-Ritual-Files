import local from "./local.json"


export const LOCATIONS = [local];
export const locationById = Object.fromEntries(LOCATIONS.map((l) => [l.id, l]));