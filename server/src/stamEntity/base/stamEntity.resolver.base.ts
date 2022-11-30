/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeleteStamEntityArgs } from "./DeleteStamEntityArgs";
import { StamEntityFindManyArgs } from "./StamEntityFindManyArgs";
import { StamEntityFindUniqueArgs } from "./StamEntityFindUniqueArgs";
import { StamEntity } from "./StamEntity";
import { StamEntityService } from "../stamEntity.service";

@graphql.Resolver(() => StamEntity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class StamEntityResolverBase {
  constructor(
    protected readonly service: StamEntityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "StamEntity",
    action: "read",
    possession: "any",
  })
  async _stamEntitiesMeta(
    @graphql.Args() args: StamEntityFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [StamEntity])
  @nestAccessControl.UseRoles({
    resource: "StamEntity",
    action: "read",
    possession: "any",
  })
  async stamEntities(
    @graphql.Args() args: StamEntityFindManyArgs
  ): Promise<StamEntity[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => StamEntity, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "StamEntity",
    action: "read",
    possession: "own",
  })
  async stamEntity(
    @graphql.Args() args: StamEntityFindUniqueArgs
  ): Promise<StamEntity | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => StamEntity)
  @nestAccessControl.UseRoles({
    resource: "StamEntity",
    action: "delete",
    possession: "any",
  })
  async deleteStamEntity(
    @graphql.Args() args: DeleteStamEntityArgs
  ): Promise<StamEntity | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}