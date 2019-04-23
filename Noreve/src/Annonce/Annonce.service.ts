import { getCustomRepository } from 'typeorm';

import { Annonce } from '../Annonce/Annonce.entity';
import { AnnonceRepository } from '../Annonce/Annonce.repository';

export class AnnonceService {
  /**
   * SINGLETON PATTERN
   * @see https://en.wikipedia.org/wiki/Singleton_pattern
   */
  public static getInstance() {
    if (!this.instance) {
      this.instance = new AnnonceService();
    }
    return this.instance;
  }

  constructor() {
    this.annonceRepository = getCustomRepository(AnnonceRepository);
  }
  private static instance: AnnonceService;

  private annonceRepository: AnnonceRepository;

  /**
   * Insert a annonce in Db
   *
   * @param annonce
   * @returns Resolves with Annonce inserted
   */
  public async create(annonce: any) {
    const annonceToInsert: Partial<Annonce> = {
      ...annonce,
    };
    return this.annonceRepository.save(annonceToInsert);
  }

  public async delete(annonceId: string) {
    return this.annonceRepository.delete(annonceId);
  }

  public async getAnnonce(annonceId: string) {
    return this.annonceRepository.findOne(annonceId);
  }

  /**
   * Retrieve all annonces from Db
   *
   * @returns Resolves with the list of all annonces in Db
   */
  public async getAll() {
    return this.annonceRepository.find();
  }

  public async update(body: Partial<Annonce>, annonceId: string) {
    const annonceToUpdate = await this.annonceRepository.findOne(annonceId);
    if (!annonceToUpdate) {
      'Cet id n\'existe pas';
    }
    return this.annonceRepository.save({ ...annonceToUpdate, ...body });
  }
}
