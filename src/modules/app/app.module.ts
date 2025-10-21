import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from 'src/infra/database/database.module';
import { TasksModule } from 'src/modules/tasks/tasks.module';

@Module({
  imports: [DatabaseModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
