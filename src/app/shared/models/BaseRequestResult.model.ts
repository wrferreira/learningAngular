export class BaseRequestResult<T> {
    erro: boolean = false;
    mensagemErro: string = null;
    dataResult: T;
}