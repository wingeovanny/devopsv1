import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should create a new product', () => {
    const productDto: CreateProductDto = {
      id: 1,
      name: 'Test Product',
      description: 'Test Desc',
      price: 100,
    };
    const createdProduct = service.create(productDto);
    expect(createdProduct).toMatchObject(productDto);
  });

  it('should find a product by id', () => {
    const productDto: CreateProductDto = {
      id: 1,
      name: 'Test Product',
      description: 'Test Desc',
      price: 100,
    };
    const createdProduct = service.create(productDto);
    const product = service.findOne(createdProduct.id);
    expect(product).toMatchObject(productDto);
  });

  it('should throw an error if product not found', () => {
    expect(() => service.findOne(999)).toThrowError(
      'Product with id 999 not found',
    );
  });

  it('should update a product', () => {
    const productDto: CreateProductDto = {
      id: 1,
      name: 'Test Product',
      description: 'Test Desc',
      price: 100,
    };
    const createdProduct = service.create(productDto);
    const updatedProduct = service.update(createdProduct.id, { price: 150 });
    expect(updatedProduct.price).toEqual(150);
  });

  it('should delete a product', () => {
    const productDto: CreateProductDto = {
      id: 1,
      name: 'Test Product',
      description: 'Test Desc',
      price: 100,
    };
    const createdProduct = service.create(productDto);
    service.remove(createdProduct.id);
    expect(() => service.findOne(createdProduct.id)).toThrowError(
      'Product with id 1 not found',
    );
  });
});
