import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Favoris } from '../Favoris/Favoris.entity';
import { PropositionAchat } from '../Proposition_achat/Proposition_achat.entity';
import { Users } from '../Users/Users.entity';

@Entity({ name: 'annonce' })
export class Annonce {
  @OneToMany(type => Favoris, favoris => favoris.annonce, { nullable: true })
  favoris?: Favoris[];

  @PrimaryGeneratedColumn('uuid', { name: 'role_id' })
  public id: number;

  @Column({ name: 'libelle', type: 'varchar' })
  public libelle: string;

  @OneToMany(
    type => PropositionAchat,
    propositionAchat => propositionAchat.annonce,
    { nullable: true },
  )
  propositionAchat?: PropositionAchat[];

  @ManyToOne(type => Users, users => users.annonce)
  users: Users;
}
