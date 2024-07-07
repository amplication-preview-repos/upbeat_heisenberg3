import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NpcService } from "./npc.service";
import { NpcControllerBase } from "./base/npc.controller.base";

@swagger.ApiTags("npcs")
@common.Controller("npcs")
export class NpcController extends NpcControllerBase {
  constructor(
    protected readonly service: NpcService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
