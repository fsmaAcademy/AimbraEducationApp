export interface Options {
  name?: string;
  schema?: string;
}

export class TypeOrmConfig {

  public connections = [
    {
      name: 'aimbraSecurity',
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'aimbra_education',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}'
      ],
      schema: 'security',
      synchronize: true
    },
    {
      name: 'aimbraPersonal',
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'aimbra_education',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}'
      ],
      schema: 'personal',
      synchronize: true
    }
  ];

  constructor(public option: Options) { }

  public getConnection(): {} {
    if (this.option.schema) {
      return  this.connections.find((v) => v.schema === this.option.schema);
    }
    if (this.option.name) {
      return this.connections.find((v) => v.name === this.option.name);
    }
    return {};
  }

}
