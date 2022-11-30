import { Module } from "@nestjs/common";
import { StamEntityModuleBase } from "./base/stamEntity.module.base";
import { StamEntityService } from "./stamEntity.service";
import { StamEntityController } from "./stamEntity.controller";
import { StamEntityResolver } from "./stamEntity.resolver";

@Module({
  imports: [StamEntityModuleBase],
  controllers: [StamEntityController],
  providers: [StamEntityService, StamEntityResolver],
  exports: [StamEntityService],
})
export class StamEntityModule {}
