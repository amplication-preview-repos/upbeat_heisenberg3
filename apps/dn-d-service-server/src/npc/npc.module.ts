import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NpcModuleBase } from "./base/npc.module.base";
import { NpcService } from "./npc.service";
import { NpcController } from "./npc.controller";
import { NpcResolver } from "./npc.resolver";

@Module({
  imports: [NpcModuleBase, forwardRef(() => AuthModule)],
  controllers: [NpcController],
  providers: [NpcService, NpcResolver],
  exports: [NpcService],
})
export class NpcModule {}
