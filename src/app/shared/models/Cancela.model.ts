export class CancelaData {
    cancelaId: number;
    tipo: number;
    sentido: number;
}

export interface CancelaLastRegister {
    assinatura: string;
    cancelaId: number;
    cancelaLiberada: boolean;
    chassi: string;
    clienteId: number;
    clienteNome: string;
    erros: string[];
    id: number;
    leituraBruta: string;
    placa: string;
    placaUrl: string;
    sentido: number;
    tipo: number;
    usuarioCnh: string;
    veiculoId: number;
    veiculoSituacao: number;
}

export interface CancelaResponseEvent {
    cancelaLiberada: boolean;
    clienteNome: string;
    erros: string[];
    id: number
    leituraBruta: string;
    placa: string;
    placaUrl: string;
    veiculoId: number;
    veiculoSituacao: number;
}

export class CancelaRegistroManual {
    placa?: string;
    chassi?: string;
    cancelaId?: number;
    sentido?: number;
    tipo?: number;
}

export class CancelaResponseEventInfo {
    icon?: string;
    title?: string;
    message?: string;
    status?: string;
    listaErros?: string[];
}