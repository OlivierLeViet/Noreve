import { Request, Response, Router } from 'express';

import { AnnonceService } from '../Annonce/Annonce.service';
import { IRouteInterface } from './../tools/route.interface';

export class AnnonceController {
  constructor() {
    this.router = Router();
    this.annonceService = AnnonceService.getInstance;
  }

  private annonceService: () => AnnonceService;
  private router: Router;

  /**
   * Define and return the router of AnnonceController.
   *
   * @returns Resolves with the router and its routes
   */
  async getRoutes() {
    const routes: IRouteInterface[] = [
      { path: '/', method: 'post', actions: [this.create] },
      { path: '/update/:annonceId', method: 'put', actions: [this.update] },
      { path: '/:annonceId', method: 'get', actions: [this.getAnnonce] },
      { path: '/id/:annonceId', method: 'get', actions: [this.getAnnonce] },
      { path: '/', method: 'get', actions: [this.getAll] },
      { path: '/delete/:annonceId', method: 'delete', actions: [this.delete] },
    ];

    routes.forEach(item => {
      const { path, method, actions } = item;
      this.router[method](path, ...actions.map(action => action.bind(this)));
    });

    return this.router;
  }

  /**
   * Insert new Annonce in Db
   *
   * @param req
   * @param res
   * @returns with the created Annonce
   */
  private async create(req: Request, res: Response) {
    res.json({ inserted: await this.annonceService().create(req.body) });
  }

  private async delete(req: Request, res: Response) {
    res.json({ results: await this.annonceService().delete(req.params) });
  }

  private async getAnnonce(req: Request, res: Response) {
    res.json({ results: await this.annonceService().getAnnonce(req.params) });
  }

  /**
   * Return a list of all annonces from Db
   *
   * @param req
   * @param res
   * @returns Resolves with the list of all Annonces
   */
  private async getAll(req: Request, res: Response) {
    res.json({ results: await this.annonceService().getAll() });
  }

  private async update(req: Request, res: Response) {
    res.json({
      results: await this.annonceService().update(
        req.body,
        req.params.annonceId,
      ),
    });
  }
}
