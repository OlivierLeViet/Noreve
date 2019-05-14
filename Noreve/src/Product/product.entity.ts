import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ps_product' })
export class Product {
  @PrimaryGeneratedColumn('uuid', { name: 'id_product' })
  public id_product: number;

  @Column({ name: 'price', type: 'float' })
  public price: number;
}

// Ps_product : ID, id_category_default, price, reference, date_add, date_upd,
// ps_customization : ID, id_product_attribute, id_product, quantity
// ps_finition : ID, couleurs_ext, couleurs_int,
// ps_image : id, id_product,
// ps_lang : ID, name, iso_code, language_code, date_format_full,
// ps_category : ID, image,
