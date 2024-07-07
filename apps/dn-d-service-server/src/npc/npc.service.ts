import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NpcServiceBase } from "./base/npc.service.base";

@Injectable()
export class NpcService extends NpcServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
