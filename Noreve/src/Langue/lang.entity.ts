import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ps_lang' })
export class Lang {
  @PrimaryGeneratedColumn('uuid', { name: 'id_lang' })
  public id_lang: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'iso_code', type: 'varchar' })
  public iso_code: string;

  @Column({ name: 'language_code', type: 'varchar' })
  public language_code: string;
}
