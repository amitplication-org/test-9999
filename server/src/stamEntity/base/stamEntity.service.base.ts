/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, StamEntity } from "@prisma/client";

export class StamEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.StamEntityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StamEntityFindManyArgs>
  ): Promise<number> {
    return this.prisma.stamEntity.count(args);
  }

  async findMany<T extends Prisma.StamEntityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StamEntityFindManyArgs>
  ): Promise<StamEntity[]> {
    return this.prisma.stamEntity.findMany(args);
  }
  async findOne<T extends Prisma.StamEntityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StamEntityFindUniqueArgs>
  ): Promise<StamEntity | null> {
    return this.prisma.stamEntity.findUnique(args);
  }
  async create<T extends Prisma.StamEntityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StamEntityCreateArgs>
  ): Promise<StamEntity> {
    return this.prisma.stamEntity.create<T>(args);
  }
  async update<T extends Prisma.StamEntityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StamEntityUpdateArgs>
  ): Promise<StamEntity> {
    return this.prisma.stamEntity.update<T>(args);
  }
  async delete<T extends Prisma.StamEntityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StamEntityDeleteArgs>
  ): Promise<StamEntity> {
    return this.prisma.stamEntity.delete(args);
  }
}
