import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsRepository {
  private products: Product[] = [];
  private currentId = 1;

  create(createProductDto: CreateProductDto): Product {
    const newProduct: Product = {
      id: this.currentId++,
      ...createProductDto,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto): Product {
    const product = this.findOne(id);
    const updatedProduct = { ...product, ...updateProductDto };
    const index = this.products.findIndex((p) => p.id === id);
    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  remove(id: number): void {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    this.products.splice(index, 1);
  }
}
