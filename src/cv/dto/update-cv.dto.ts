import { PartialType } from '@nestjs/mapped-types';
import { CreateCvDto } from './create-cv.dto';
import { IsNotEmpty, IsNumber, Length, MinLength } from 'class-validator';
import { SkillEntity } from '../../skill/entities/skill.entity';

export class UpdateCvDto extends PartialType(CreateCvDto) {}
