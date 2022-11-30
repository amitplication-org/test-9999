import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { StamEntityResolverBase } from "./base/stamEntity.resolver.base";
import { StamEntity } from "./base/StamEntity";
import { StamEntityService } from "./stamEntity.service";

@graphql.Resolver(() => StamEntity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class StamEntityResolver extends StamEntityResolverBase {
  constructor(
    protected readonly service: StamEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
