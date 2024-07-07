import { NpcWhereInput } from "./NpcWhereInput";
import { NpcOrderByInput } from "./NpcOrderByInput";

export type NpcFindManyArgs = {
  where?: NpcWhereInput;
  orderBy?: Array<NpcOrderByInput>;
  skip?: number;
  take?: number;
};
