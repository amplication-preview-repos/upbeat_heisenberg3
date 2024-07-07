import { GameWhereUniqueInput } from "./GameWhereUniqueInput";
import { GameUpdateInput } from "./GameUpdateInput";

export type UpdateGameArgs = {
  where: GameWhereUniqueInput;
  data: GameUpdateInput;
};
