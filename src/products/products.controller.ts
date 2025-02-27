import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductsService } from './providers/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('create')
  public async createProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.createProduct(createProductDto);
  }
}
