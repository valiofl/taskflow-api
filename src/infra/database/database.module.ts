import { Global, Module } from "@nestjs/common";
import { PrismaService } from "src/infra/database/database.service";

@Global()
@Module({
    providers: [PrismaService],
})
export class DatabaseModule {}