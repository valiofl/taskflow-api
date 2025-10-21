import { Injectable } from "@nestjs/common";
import KSUID from "ksuid";
import { PrismaService } from "src/infra/database/database.service";
interface CreateTaskRequest {
    title: string;
    description: string;
}

@Injectable()
export class CreateTasksService {
    constructor(private readonly prismaService: PrismaService) { }
    async execute({ title, description }: CreateTaskRequest) { 
    const task = await this.prismaService.tasks.create({
        data: {
            id: KSUID.randomSync().string,
            title,
            description,
        },
    });
    return task;
    }
}