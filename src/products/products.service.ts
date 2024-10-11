import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  create(createProductDto: CreateProductDto): Product {
    return this.productsRepository.create(createProductDto);
  }

  findAll(): Product[] {
    return this.productsRepository.findAll();
  }

  findOne(id: number): Product {
    return this.productsRepository.findOne(id);
  }

  update(id: number, updateProductDto: UpdateProductDto): Product {
    return this.productsRepository.update(id, updateProductDto);
  }

  remove(id: number): void {
    return this.productsRepository.remove(id);
  }
}
