import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { DiaLetivoEntity } from '../entities/dia-letivo.entity';
import { DisciplinaEntity } from '../entities/disciplina.entity';
import { ProfessorEntity } from '../entities/professor.entity';
import { MatriculaEntity } from '../entities/matricula.entity';

@Entity('turmas')
export class TurmaEntity {

  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public id: string;

  @ManyToOne(type => DisciplinaEntity, disciplina => disciplina.turma)
  public disciplina: DisciplinaEntity;

  @OneToMany(type => DiaLetivoEntity, diaLetivos => diaLetivos.turma)
  public diaLetivos: DiaLetivoEntity[];

  @ManyToOne(type => ProfessorEntity, professor => professor.turmas)
  public professor: ProfessorEntity;

  @OneToMany(type => MatriculaEntity, matricula => matricula.turma)
  public matricula!: MatriculaEntity[];
}
