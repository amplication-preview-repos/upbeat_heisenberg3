import { Item as TItem } from "../api/item/Item";

export const ITEM_TITLE_FIELD = "id";

export const ItemTitle = (record: TItem): string => {
  return record.id?.toString() || String(record.id);
};
