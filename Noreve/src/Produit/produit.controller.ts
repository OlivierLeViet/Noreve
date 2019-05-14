import { Request, Response, Router } from 'express';

import { IRouteInterface } from '../tools/route.interface';
import { ProduitService } from './Produit.service';

export class ProduitController {
  constructor() {
    this.router = Router();
    this.produitService = ProduitService.getInstance;
  }

  private produitService: () => ProduitService;
  private router: Router;

  /**
   * Define and return the router of ProduitController.
   *
   * @returns Resolves with the router and its routes
   */
  async getRoutes() {
    const routes: IRouteInterface[] = [
      { path: '/:id_lang', method: 'get', actions: [this.getProduit] },
      { path: '/id/:produitId', method: 'get', actions: [this.getProduit] },
      { path: '/', method: 'get', actions: [this.getAll] },
    ];

    routes.forEach(item => {
      const { path, method, actions } = item;
      this.router[method](path, ...actions.map(action => action.bind(this)));
    });

    return this.router;
  }

  private async getProduit(req: Request, res: Response) {
    res.json({ results: await this.produitService().getProduit(req.params) });
  }

  /**
   * Return a list of all produits from Db
   *
   * @param req
   * @param res
   * @returns Resolves with the list of all Produits
   */
  private async getAll(req: Request, res: Response) {
    res.json({ results: await this.produitService().getAll() });
  }
}
