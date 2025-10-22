import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/database/database.service";


@Injectable()
export class GetTasksService {
    constructor(private readonly prismaService: PrismaService) { }
    async execute() { 
    const task = await this.prismaService.tasks.findMany({ where: { deletedAt: null } });
    return task;
    }
}