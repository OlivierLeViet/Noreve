import { Request, Response, Router } from 'express';

import { IRouteInterface } from '../tools/route.interface';
import { NoreveService } from './Noreve.service';

export class NoreveController {
  constructor() {
    this.router = Router();
    this.noreveService = NoreveService.getInstance;
  }

  private noreveService: () => NoreveService;
  private router: Router;

  /**
   * Define and return the router of NoreveController.
   *
   * @returns Resolves with the router and its routes
   */
  async getRoutes() {
    const routes: IRouteInterface[] = [
      { path: '/:noreveId', method: 'get', actions: [this.getNoreve] },
      { path: '/id/:noreveId', method: 'get', actions: [this.getNoreve] },
      { path: '/', method: 'get', actions: [this.getAll] },
    ];

    routes.forEach(item => {
      const { path, method, actions } = item;
      this.router[method](path, ...actions.map(action => action.bind(this)));
    });

    return this.router;
  }

  private async getNoreve(req: Request, res: Response) {
    res.json({ results: await this.noreveService().getNoreve(req.params) });
  }

  /**
   * Return a list of all noreves from Db
   *
   * @param req
   * @param res
   * @returns Resolves with the list of all Noreves
   */
  private async getAll(req: Request, res: Response) {
    res.json({ results: await this.noreveService().getAll() });
  }
}
