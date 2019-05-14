import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ps_product_bs_smartphone_items_lang' })
export class Produit {
  @PrimaryGeneratedColumn('uuid', { name: 'id_item' })
  public id_item: number;

  @Column({ name: 'title', type: 'varchar' })
  public title: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'image', type: 'varchar' })
  public image: string;

  @Column({ name: 'id_lang', type: 'varchar' })
  public id_lang: number;
}
