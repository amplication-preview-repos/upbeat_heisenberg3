import { Character as TCharacter } from "../api/character/Character";

export const CHARACTER_TITLE_FIELD = "id";

export const CharacterTitle = (record: TCharacter): string => {
  return record.id?.toString() || String(record.id);
};
