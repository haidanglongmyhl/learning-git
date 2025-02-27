import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateProductDto {
  @MinLength(4)
  @MaxLength(256)
  @IsString()
  productsName: string;

  @IsNumber()
  productsPrice: number;
}
