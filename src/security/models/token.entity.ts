import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TokenTipo } from '../enums/token-tipo.model';
import { UsuarioEntity } from './usuario.entity';

@Entity('tokens', { schema: 'security' })
export class TokenEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public id: string;

  @Column('timestamp', { name: 'dataCriacao' })
  public dataCriacao: Date;

  @Column('timestamp', { name: 'dataExpiracao' })
  public dataExpiracao: Date;

  @Column('varchar', { name: 'tipo' })
  public tipo: TokenTipo;

  @OneToMany(type => UsuarioEntity, u => u.token)
  public usuario: UsuarioEntity;

}
