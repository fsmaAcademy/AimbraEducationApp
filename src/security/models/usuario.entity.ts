import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { Permissao } from '../enums/permissao.model';
import { TokenEntity } from './token.entity';
import { PessoaEntity } from '../../personal/models/pessoa.entity';

@Entity('usuarios', { schema: 'security'})
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public id: string;

  @Column('varchar', { length: 255, name: 'apelido', unique: true })
  public apelido: string;

  @Column('varchar', { length: 255, name: 'senha' })
  public senha: string;

  @Column('boolean', { name: 'isAtivo', default: true })
  public isAtivo: boolean;

  @Column('timestamp', { name: 'criadoEm' })
  public criadoEm: Date;

  @Column('timestamp', { name: 'atualizadoEm' })
  public atualizadoEm: Date;

  @Column('varchar', { name: 'avatar', length: 255 })
  public avatar: string;

  @Column('varchar', { name: 'permissao', length: 64 })
  public permissao: Permissao;

  @ManyToOne(type => TokenEntity, t => t.usuario)
  public token: TokenEntity;

  @OneToMany(type => PessoaEntity, p => p.usuario)
  public pessoa: PessoaEntity;
}
