import { Competencia } from "./competencia";
import { Equipo } from "./equipo";

export class Partido {
    idPartido: number;
    equipo1: Equipo;
    equipo2: Equipo;
    competencia: Competencia;
    cuotaEquipo1: number;
    cuotaEquipo2: number;
    cuotaEmpate: number;
}
