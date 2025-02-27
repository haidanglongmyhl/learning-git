import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './providers/products.service';
import { Product } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // ✅ Đăng ký Product entity
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
