import { Column, PrimaryGeneratedColumn, Entity, OneToOne, ManyToMany, ManyToOne } from 'typeorm';
import { UsuarioEntity } from '../../security/models/usuario.entity';

@Entity('pessoas', { schema: 'personal' })
export class PessoaEntity {
  private _id: string;
  private _nome: string;
  private _email: string;
  private _dataAniversario: Date;
  private _isDeficiente: boolean;
  private _nomeDoPai: string;
  private _nomeDaMae: string;
  private _ultimaInstituicaoDeEnsino: string;
  private _cidadeInstituicaiDeEnsino: string;
  private _nivelEducacional: string;
  private _usuario: UsuarioEntity;
  

  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  @Column('varchar', { name: 'nome', length: 255 })
  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  @Column('varchar', { name: 'email', length: 255, unique: true })
  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  @Column('timestamp', { name: 'dataAniversario' })
  public get dataAniversario(): Date {
    return this._dataAniversario;
  }

  public set dataAniversario(value: Date) {
    this._dataAniversario = value;
  }

  @Column('boolean', { name: 'isDeficiente', default: false })
  public get isDeficiente(): boolean {
    return this._isDeficiente;
  }

  public set isDeficiente(value: boolean) {
    this._isDeficiente = value;
  }

  @Column('varchar', { name: 'nomeDoPai', length: 255 })
  public get nomeDoPai(): string {
    return this._nomeDoPai;
  }

  public set nomeDoPai(value: string) {
    this._nomeDoPai = value;
  }

  @Column('varchar', { name: 'nomeDoMae', length: 255 })
  public get nomeDaMae(): string {
    return this._nomeDaMae;
  }

  public set nomeDaMae(value: string) {
    this._nomeDaMae = value;
  }

  @Column('varchar', { name: 'ultimaInstituicaoDeEnsino', length: 255 })
  public get ultimaInstituicaoDeEnsino(): string {
    return this._ultimaInstituicaoDeEnsino;
  }

  public set ultimaInstituicaoDeEnsino(value: string) {
    this._ultimaInstituicaoDeEnsino = value;
  }

  @Column('varchar', { name: 'cidadeInstituicaiDeEnsino', length: 255 })
  public get cidadeInstituicaiDeEnsino(): string {
    return this._cidadeInstituicaiDeEnsino;
  }

  public set cidadeInstituicaiDeEnsino(value: string) {
    this._cidadeInstituicaiDeEnsino = value;
  }

  @Column('varchar', { name: 'nivelEducacional', length: 255 })
  public get nivelEducacional(): string {
    return this._nivelEducacional;
  }

  public set nivelEducacional(value: string) {
    this._nivelEducacional = value;
  }

  @ManyToOne(type => UsuarioEntity, u => u.pessoa)
  public get usuario(): UsuarioEntity {
    return this._usuario;
  }

  public set usuario(value: UsuarioEntity) {
    this._usuario = value;
  }

}
