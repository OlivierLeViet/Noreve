import { EntityRepository, Repository } from 'typeorm';

import { Produit } from './produit.entity';

@EntityRepository(Produit)
export class ProduitRepository extends Repository<Produit> {}
