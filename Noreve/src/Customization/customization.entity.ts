import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../Product/product.entity';

@Entity({ name: 'ps_customization' })
export class Customization {
  @PrimaryGeneratedColumn('uuid', { name: 'id_customization' })
  public id_customization: number;

  @Column({ name: 'id_product_attribute', type: 'int' })
  public id_product_attribute: number;

  @Column({ name: 'quantity', type: 'int' })
  public quantity: number;

  @OneToOne(type => Product)
  @JoinColumn()
  product: Product;
}

// ps_customization : ID, id_product_attribute, id_product, quantity
