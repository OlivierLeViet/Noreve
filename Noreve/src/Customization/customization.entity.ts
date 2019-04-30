import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ps_customization' })
export class Noreve {
  @PrimaryGeneratedColumn('uuid', { name: 'id_customization' })
  public id_customization: number;

  @Column({ name: 'id_product_attribute', type: 'int' })
  public id_product_attribute: number;

  @Column({ name: 'id_product', type: 'int' })
  public id_product: number;

  @Column({ name: 'quantity', type: 'int' })
  public quantity: number;
}

// ps_customization : ID, id_product_attribute, id_product, quantity
