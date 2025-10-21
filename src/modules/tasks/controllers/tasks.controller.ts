import { Body, Controller, Get, Post, Res, Response } from "@nestjs/common";
import { CreateTasksService } from "src/modules/tasks/services/create-tasks.service";
import { GetTasksService } from "src/modules/tasks/services/get-tasks.service";

@Controller("tasks")
export class TasksController {
    constructor (private readonly createTaskService: CreateTasksService, private readonly getTasksService: GetTasksService) { }

    @Post()
    async createTask(@Response() res, @Body() body: any) { 
        const response = await this.createTaskService.execute(body);
        return res.status(201).json(response);
    }

    @Get() 
    async getTasks(@Response() res) { 
        const response = await this.getTasksService.execute();
        return res.status(200).json(response);
    }
 } 