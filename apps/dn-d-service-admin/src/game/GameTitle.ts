import { Game as TGame } from "../api/game/Game";

export const GAME_TITLE_FIELD = "name";

export const GameTitle = (record: TGame): string => {
  return record.name?.toString() || String(record.id);
};
