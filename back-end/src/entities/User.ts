import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  OneToOne,
} from 'typeorm';

import Identificador from './Identificador';

@Entity('user')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  docID: string;

  @Column()
  email: string;

  @Column()
  telefoneOpc: string;

  @Column()
  telefoneMov: string;

  @Column()
  endereco: string;

  @UpdateDateColumn()
  updateDate: Date;

  @Column()
  foto: Blob;

  @Column()
  login: string;

  @Column()
  senha: string;

  @CreateDateColumn()
  createDate: Date;

  @Column()
  saldo: number;

  @Column()
  nascimento: Date;

  @Column()
  fotoDoc_frente: Blob;

  @Column()
  fotoDoc_verso: Blob;

  @OneToOne(() => Identificador, identificador => identificador.ID)
  identifier_ID: Identificador;
}
