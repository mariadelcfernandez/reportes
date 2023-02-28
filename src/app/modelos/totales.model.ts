import { Dependencia } from "./dependencia.model";


export interface Totales {
    total_detenciones: Number,
    total_menores: Number,
    ultima_detencion: Date | null,
    total_por_dependencia: Dependencia[],
    observaciones?: String,
}
