import { getCustomRepository } from 'typeorm';
import { ProductRepository } from './product.repository';

export class ProductService {
  /**
   * SINGLETON PATTERN
   * @see https://en.wikipedia.org/wiki/Singleton_pattern
   */
  public static getInstance() {
    if (!this.instance) {
      this.instance = new ProductService();
    }
    return this.instance;
  }

  constructor() {
    this.productRepository = getCustomRepository(ProductRepository);
  }
  private static instance: ProductService;

  private productRepository: ProductRepository;

  public async getProduct(productId: string) {
    return this.productRepository.findOne(productId);
  }

  /**
   * Retrieve all products from Db
   *
   * @returns Resolves with the list of all products in Db
   */
  public async getAll() {
    return this.productRepository.find();
  }
}
