export class Pessoa {
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

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }
  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get dataAniversario(): Date {
    return this._dataAniversario;
  }

  public set dataAniversario(value: Date) {
    this._dataAniversario = value;
  }

  public get isDeficiente(): boolean {
    return this._isDeficiente;
  }

  public set isDeficiente(value: boolean) {
    this._isDeficiente = value;
  }

  public get nomeDoPai(): string {
    return this._nomeDoPai;
  }

  public set nomeDoPai(value: string) {
    this._nomeDoPai = value;
  }

  public get nomeDaMae(): string {
    return this._nomeDaMae;
  }

  public set nomeDaMae(value: string) {
    this._nomeDaMae = value;
  }

  public get ultimaInstituicaoDeEnsino(): string {
    return this._ultimaInstituicaoDeEnsino;
  }

  public set ultimaInstituicaoDeEnsino(value: string) {
    this._ultimaInstituicaoDeEnsino = value;
  }

  public get cidadeInstituicaiDeEnsino(): string {
    return this._cidadeInstituicaiDeEnsino;
  }

  public set cidadeInstituicaiDeEnsino(value: string) {
    this._cidadeInstituicaiDeEnsino = value;
  }

  public get nivelEducacional(): string {
    return this._nivelEducacional;
  }

  public set nivelEducacional(value: string) {
    this._nivelEducacional = value;
  }
}
