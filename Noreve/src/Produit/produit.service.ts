import { getCustomRepository } from 'typeorm';
import { ProduitRepository } from './produit.repository';

export class ProduitService {
  /**
   * SINGLETON PATTERN
   * @see https://en.wikipedia.org/wiki/Singleton_pattern
   */
  public static getInstance() {
    if (!this.instance) {
      this.instance = new ProduitService();
    }
    return this.instance;
  }

  constructor() {
    this.produitRepository = getCustomRepository(ProduitRepository);
  }
  private static instance: ProduitService;

  private produitRepository: ProduitRepository;

  public async getProduit(produitId: string) {
    return this.produitRepository.findOne(produitId);
  }

  /**
   * Retrieve all produits from Db
   *
   * @returns Resolves with the list of all produits in Db
   */
  public async getAll() {
    return this.produitRepository.find();
  }
}
