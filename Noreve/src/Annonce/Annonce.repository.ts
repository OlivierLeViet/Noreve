import { EntityRepository, Repository } from 'typeorm';

import { Annonce } from './Annonce.entity';

@EntityRepository(Annonce)
export class AnnonceRepository extends Repository<Annonce> {}
