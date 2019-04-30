import { Request, Response, Router } from 'express';

import { IRouteInterface } from '../tools/route.interface';
import { ProductService } from './Product.service';

export class ProductController {
  constructor() {
    this.router = Router();
    this.productService = ProductService.getInstance;
  }

  private productService: () => ProductService;
  private router: Router;

  /**
   * Define and return the router of ProductController.
   *
   * @returns Resolves with the router and its routes
   */
  async getRoutes() {
    const routes: IRouteInterface[] = [
      { path: '/:productId', method: 'get', actions: [this.getProduct] },
      { path: '/id/:productId', method: 'get', actions: [this.getProduct] },
      { path: '/', method: 'get', actions: [this.getAll] },
    ];

    routes.forEach(item => {
      const { path, method, actions } = item;
      this.router[method](path, ...actions.map(action => action.bind(this)));
    });

    return this.router;
  }

  private async getProduct(req: Request, res: Response) {
    res.json({ results: await this.productService().getProduct(req.params) });
  }

  /**
   * Return a list of all products from Db
   *
   * @param req
   * @param res
   * @returns Resolves with the list of all Products
   */
  private async getAll(req: Request, res: Response) {
    res.json({ results: await this.productService().getAll() });
  }
}
