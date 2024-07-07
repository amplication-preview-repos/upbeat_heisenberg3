import { Npc as TNpc } from "../api/npc/Npc";

export const NPC_TITLE_FIELD = "id";

export const NpcTitle = (record: TNpc): string => {
  return record.id?.toString() || String(record.id);
};
