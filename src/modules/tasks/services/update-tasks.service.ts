import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/infra/database/database.service";

@Injectable()
export class UpdateTasksService {
    constructor(private readonly prismaService: PrismaService) { }
    async execute(id: string, title: string, description?: string) { 
        const verify = await this.prismaService.tasks.findFirst({
            where: { id },
        });
        if (!verify) {
            throw new NotFoundException("Tarefa não encontrada");
        }
        const task = await this.prismaService.tasks.update({
            where: { id },
            data: {title, description},
        });
        return task;
    }
}