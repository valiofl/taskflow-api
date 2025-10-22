import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTasksDto {
    @ApiProperty({ description: 'Título da tarefa', example: 'Comprar Keychron K3' })
    @IsString({ message: 'O título deve ser uma string' })
    @IsNotEmpty({ message: 'O título é obrigatório' })
    title: string;

    @ApiProperty({ description: 'Descrição da tarefa', example: 'Porque eu quero muito esse teclado.', required: false })
    @IsString({ message: 'A descrição deve ser uma string' })
    @IsOptional()
    description?: string;
}

export class UpdateTasksDto extends CreateTasksDto {}