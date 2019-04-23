import { Column, Entity, PrimaryGeneratedColumn, Table } from 'typeorm';

@Entity({ name: 'noreve' })
@Table((name = 'test'))
@SecondaryTable((name = 'test_test'))
export class Noreve {
  @PrimaryGeneratedColumn('uuid', { name: 'role_id' })
  public id: number;

  @Column({ name: 'libelle', type: 'varchar' })
  public libelle: string;
}
