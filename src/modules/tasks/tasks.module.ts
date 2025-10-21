import { Get, Module } from "@nestjs/common";
import { TasksController } from "src/modules/tasks/controllers/tasks.controller";
import { CreateTasksService } from "src/modules/tasks/services/create-tasks.service";
import { GetTasksService } from "src/modules/tasks/services/get-tasks.service";

@Module({
  controllers: [TasksController],
  providers: [CreateTasksService, GetTasksService],
})
export class TasksModule { }
