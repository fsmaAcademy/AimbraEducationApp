import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { TurmaEntity } from '../entities/turma.entity';
import { MatriculaDiaLetivoEntity } from '../entities/matricula-dia-letivo.entity';

@Entity('dias_letivos')
export class DiaLetivoEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    public id: string;

    @Column('timestamp', { name: 'data' })
    public data: Date;

    @ManyToOne(type => TurmaEntity, turma => turma.diaLetivos)
    public turma: TurmaEntity;

    @OneToMany(type => MatriculaDiaLetivoEntity, m => m.diaLetivo)
    public matriculaDiaLetivos!: MatriculaDiaLetivoEntity[];
}
