import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'noreve' })
export class Noreve {
  @PrimaryGeneratedColumn('uuid', { name: 'id_noreve' })
  public id_noreve: number;

  @Column({ name: 'id_category_default', type: 'int' })
  public id_category: number;
}
