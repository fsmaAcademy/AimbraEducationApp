import { Entity, OneToMany } from 'typeorm';
import { PessoaEntity } from '../entities/pessoa.entity';
import { MatriculaEntity } from '../entities/matricula.entity';

@Entity('alunos')
export class AlunoEntity extends PessoaEntity {

    @OneToMany(type => MatriculaEntity, matricula => matricula.aluno)
    public matriculas!: MatriculaEntity[];

}
