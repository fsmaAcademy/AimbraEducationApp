import { Column } from 'typeorm/decorator/columns/Column';
import { PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { TurmaEntity } from '../entities/turma.entity';

@Entity('disciplinas')
export class DisciplinaEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('varchar', { length: 255 })
  public nome: string;

  @OneToMany(type => TurmaEntity, turma => turma.disciplina)
  public turma: TurmaEntity[];

}
