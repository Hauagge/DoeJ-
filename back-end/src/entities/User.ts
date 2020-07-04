import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import Identificador from './Identificador';

@Entity('user')
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

  @ManyToOne(() => Identificador, identificador => identificador.ID)
  identifier_ID: Identificador;
}
