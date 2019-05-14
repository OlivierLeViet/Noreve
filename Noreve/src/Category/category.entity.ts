import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ps_category' })
export class Category {
  @PrimaryGeneratedColumn('uuid', { name: 'id_category' })
  public id_category: number;

  @Column({ name: 'image', type: 'varchar' })
  public image: string;
}
