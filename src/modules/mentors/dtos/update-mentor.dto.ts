import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Specialties } from '../enums/specialties.enum';
import { Gender } from '../enums/gender.enum';
import { CreateMentorDto } from './create-mentor.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMentorDto extends PartialType(CreateMentorDto) {
  @IsOptional()
  @IsArray()
  @IsEnum(Specialties, { each: true })
  @IsString({ each: true })
  @ArrayMinSize(1)
  @ArrayMaxSize(6)
  @ApiProperty({
    required: true,
    type: 'String array',
    example: 'Front-End, Back-End, QA, Dev Ops',
  })
  specialties?: string[];

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: "the 'role' field must not be empty" })
  @MaxLength(50, { message: 'Maximum of 50 characters exceeded' })
  @ApiProperty({
    required: true,
    example: 'Cargo X | Empresa Y',
  })
  role?: string;

  @IsOptional()
  @IsEnum(Gender)
  @IsString()
  @ApiProperty({
    required: true,
    type: 'String array',
    example: 'Não binário',
  })
  gender?: string;

  @IsString()
  @IsOptional()
  @MaxLength(600, { message: 'Maximum text length exceeded' })
  aboutMe?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: "the 'calendlyName' field must not be empty" })
  @MaxLength(50, { message: 'Maximum of 100 characters exceeded' })
  @ApiProperty({
    required: true,
    example: 'Seu userName no calendly',
  })
  calendlyName?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: "the 'agendaName' field must not be empty" })
  @MaxLength(50, { message: 'Maximum of 100 characters exceeded' })
  @ApiProperty({
    required: true,
    example:
      'O nome da sua agenda criada no calendly para atender os mentorados',
  })
  agendaName?: string;

  @IsBoolean()
  @IsOptional()
  @IsNotEmpty()
  registerComplete?: boolean;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Imagem do perfil',
  })
  profile?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Chave para remoção da imagem do perfil',
  })
  profileKey?: string;

  @IsOptional()
  file?: any;
}
