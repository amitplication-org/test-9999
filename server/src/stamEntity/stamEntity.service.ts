import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { StamEntityServiceBase } from "./base/stamEntity.service.base";

@Injectable()
export class StamEntityService extends StamEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
