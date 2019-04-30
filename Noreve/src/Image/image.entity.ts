import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ps_image' })
export class Noreve {
  @PrimaryGeneratedColumn('uuid', { name: 'id_image' })
  public id_image: number;

  @Column({ name: 'id_product', type: 'int' })
  public id_product: number;
}
