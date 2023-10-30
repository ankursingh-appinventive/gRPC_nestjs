import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { PRODUCT_SERVICE_NAME, CreateProductResponse } from './product.pb';
import { CreateProductRequestDto } from './product.dto';

@Controller('product')
export class ProductController {
  @Inject(ProductService)
  private readonly service: ProductService;

  @GrpcMethod(PRODUCT_SERVICE_NAME, 'CreateProduct')
  private async createProduct(data: CreateProductRequestDto): Promise<CreateProductResponse> {
    return this.service.createProduct(data);
  }
}
