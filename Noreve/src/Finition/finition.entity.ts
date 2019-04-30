import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ps_finition' })
export class Noreve {
  @PrimaryGeneratedColumn('uuid', { name: 'id_finition' })
  public id_finition: number;

  @Column({ name: 'id_attribute', type: 'int' })
  public id_attribute: number;

  @Column({ name: 'couleurs_ext', type: 'varchar' })
  public couleurs_ext: number;

  @Column({ name: 'couleurs_int', type: 'varchar' })
  public couleurs_int: string;
}
