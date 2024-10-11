import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateProductDto {
  id: number;

  @ApiProperty({ example: 'Laptop', description: 'The name of the product' })
  name: string;

  @ApiProperty({
    example: 'A high-performance laptop',
    description: 'Product description',
  })
  description: string;

  @ApiProperty({ example: 1500, description: 'Price of the product in USD' })
  @IsNumber()
  price: number;
}
