import { Dependencia } from './dependencia.model';
import { Persona } from './persona.model';
export interface Detencion {
    detencion_id: Number,
    fecha: Date,
    cantidad_dias: Number,
    persona: Persona,
    dependencia: Dependencia,
    delito:String
}
