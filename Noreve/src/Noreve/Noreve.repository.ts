import { EntityRepository, Repository } from 'typeorm';

import { Noreve } from './Noreve.entity';

@EntityRepository(Noreve)
export class NoreveRepository extends Repository<Noreve> {}
