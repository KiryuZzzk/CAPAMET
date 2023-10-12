import dipCAPAMET from "../../assets/img/diplomados/dip-CAPAMET.png"
import dipPC from "../../assets/img/diplomados/dip-PC.png"
import { v4 } from 'uuid';



export const diplomados = [
    {
        "id": v4(),
        "nombre": "Técnico en Emergencias: Básico",
        "asc": "TEM",
        "imagen": dipCAPAMET
    },
    {
        "id": v4(),
        "nombre": "Técnico en Emergencias: Intermedio",
        "asc": "TEM",
        "imagen": dipCAPAMET
    },
    {
        "id":v4(),
        "nombre": "Técnico en Emergencias: Avanzado",
        "asc": "TEM",
        "imagen": dipCAPAMET
    },
    {
        "id":v4(),
        "nombre": "Instructor en Gestión de Riesgos y Protección Civil",
        "asc": "Protección Civil",
        "imagen": dipPC
    }

]