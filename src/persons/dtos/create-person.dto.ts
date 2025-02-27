import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreatePersonDto {
  @MinLength(4)
  @MaxLength(256)
  @IsString()
  Name: string;

  @MinLength(4)
  @MaxLength(256)
  @IsString()
  description: string;
}
