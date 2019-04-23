import { getCustomRepository } from 'typeorm';
import { NoreveRepository } from '../Noreve/Noreve.repository';

export class NoreveService {
  /**
   * SINGLETON PATTERN
   * @see https://en.wikipedia.org/wiki/Singleton_pattern
   */
  public static getInstance() {
    if (!this.instance) {
      this.instance = new NoreveService();
    }
    return this.instance;
  }

  constructor() {
    this.noreveRepository = getCustomRepository(NoreveRepository);
  }
  private static instance: NoreveService;

  // private noreveRepository: NoreveRepository;

  public async getNoreve(noreveId: string) {
    return this.noreveRepository.findOne(noreveId);
  }

  /**
   * Retrieve all noreves from Db
   *
   * @returns Resolves with the list of all noreves in Db
   */
  public async getAll() {
    return this.noreveRepository.find();
  }
}
