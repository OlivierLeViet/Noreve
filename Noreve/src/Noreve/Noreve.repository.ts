import { EntityRepository, Repository } from 'typeorm';

import { Noreve } from '../Noreve/noreve.entity';

@EntityRepository(Noreve)
export class NoreveRepository extends Repository<Noreve> {}
