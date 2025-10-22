import { Body, Controller, Delete, Get, Param, Post, Put, Res, Response } from "@nestjs/common";
import { CreateTasksDto, UpdateTasksDto } from "src/modules/tasks/dtos/create-tasks.dto";
import { CreateTasksService } from "src/modules/tasks/services/create-tasks.service";
import { DeleteTasksService } from "src/modules/tasks/services/delete-tasks.service";
import { GetTasksService } from "src/modules/tasks/services/get-tasks.service";
import { UpdateTasksService } from "src/modules/tasks/services/update-tasks.service";

@Controller("tasks")
export class TasksController {
    constructor(
        private readonly createTaskService: CreateTasksService,
        private readonly getTasksService: GetTasksService,
        private readonly updateTasksService: UpdateTasksService,
        private readonly deleteTasksService: DeleteTasksService
    ) { }

    @Post()
    async createTask(@Response() res, @Body() body: CreateTasksDto) { 
        const response = await this.createTaskService.execute(body);
        return res.status(201).json(response);
    }

    @Get() 
    async getTasks(@Response() res) { 
        const response = await this.getTasksService.execute();
        return res.status(200).json(response);
    }

    @Put(":id")
    async updateTask(@Response() res, @Param("id") id: string, @Body() body: UpdateTasksDto) { 
        const { title, description } = body;
        const response = await this.updateTasksService.execute(id, title, description);
        return res.status(200).json(response);
    }

    @Delete(":id")
    async deleteTask(@Response() res, @Param("id") id: string) { 
        const response = await this.deleteTasksService.execute(id);
        return res.status(200).json(response);
    }
 } 