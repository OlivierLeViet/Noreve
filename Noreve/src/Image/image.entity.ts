import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../Product/product.entity';

@Entity({ name: 'ps_image' })
export class Image {
  @PrimaryGeneratedColumn('uuid', { name: 'id_image' })
  public id_image: number;

  @OneToOne(type => Product)
  @JoinColumn()
  product: Product;
}
