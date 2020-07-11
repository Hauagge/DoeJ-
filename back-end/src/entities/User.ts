import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Timestamp,
} from 'typeorm';
// import Identificador from './Identificador';

@Entity('User')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  ID: string;

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

  @Column()
  foto: string;

  @Column()
  login: string;

  @Column()
  senha: string;

  @CreateDateColumn()
  createDate: Date;

  @Column()
  saldo: number;

  @Column()
  fotoDoc_frente: string;

  @Column()
  fotoDoc_verso: string;

  @Column()
  identifier_ID: number;

  @UpdateDateColumn()
  updateDate: Date;

  @Column({ type: 'date' })
  nascimento: Date;
}
