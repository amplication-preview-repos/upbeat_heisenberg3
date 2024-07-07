import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CharacterService } from "./character.service";
import { CharacterControllerBase } from "./base/character.controller.base";

@swagger.ApiTags("characters")
@common.Controller("characters")
export class CharacterController extends CharacterControllerBase {
  constructor(
    protected readonly service: CharacterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
