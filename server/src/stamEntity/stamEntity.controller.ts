import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StamEntityService } from "./stamEntity.service";
import { StamEntityControllerBase } from "./base/stamEntity.controller.base";

@swagger.ApiTags("stamEntities")
@common.Controller("stamEntities")
export class StamEntityController extends StamEntityControllerBase {
  constructor(
    protected readonly service: StamEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
