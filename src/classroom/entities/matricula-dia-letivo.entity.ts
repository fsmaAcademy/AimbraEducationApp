import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { DiaLetivoEntity } from '../entities/dia-letivo.entity';
import { MatriculaEntity } from '../entities/matricula.entity';

@Entity('matriculas_dias_letivos')
export class MatriculaDiaLetivoEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public id!: string;

  @Column('boolean', { name: 'presente' })
  public presente!: boolean;

  @Column('varchar')
  public idMatricula!: string;

  @Column('varchar')
  public idDiaLetivo!: string;

  @ManyToOne(type => MatriculaEntity, m => m.matriculaDiaLetivos)
  public matricula!: MatriculaEntity;

  @ManyToOne(type => DiaLetivoEntity, d => d.matriculaDiaLetivos)
  public diaLetivo!: DiaLetivoEntity;

}
