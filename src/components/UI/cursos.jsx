import blsECSI from "../../assets/img/courses/BLS-ECSI.jpg"
import aclsECSI from "../../assets/img/courses/ACLS-ECSI.jpg"
import paydeaECSI from "../../assets/img/courses/PAYDEA-ECSI.png"
import pazrECSI from "../../assets/img/courses/PAZR-ECSI.jpg"

import amlsNAEMT from "../../assets/img/courses/AMLS-NAEMT.jpg"
import phtlsNAEMT from "../../assets/img/courses/PHTLS-NAEMT.jpg"
import epcNAEMT from "../../assets/img/courses/EPC-NAEMT.jpg"
import evosNAEMT from "../../assets/img/courses/EVOS-NAEMT.jpg"
import gemsNAEMT from "../../assets/img/courses/GEMS-NAEMT.jpg"
import ptepNAEMT from "../../assets/img/courses/PTEP-NAEMT.jpg"
import teccNAEMT from "../../assets/img/courses/TECC-NAEMT.jpg"
import ahdrNAEMT from "../../assets/img/courses/AHDR-NAEMT.jpg"

import paPC from "../../assets/img/courses/PA-PC.jpg"
import evPC from "../../assets/img/courses/EV-PC.jpg"
import incPC from "../../assets/img/courses/INC-PC.jpg"
import comPC from "../../assets/img/courses/COM-PC.png"
import gespPC from "../../assets/img/courses/GESP-PC.jpg"
import byrPC from "../../assets/img/courses/BYR-PC.jpg"

import pcAdiel from "../../assets/img/courses/PC-Adiel.jpg"
import etlsAdiel from "../../assets/img/courses/ETLS-Adiel.png"

import STPS from "../../assets/img/courses/STPS.png"

import { v4 } from 'uuid';

export const cursos = [
    {
        "id": v4(),
        "nombre": "BLS: Soporte Vital Básico",
        "asc": "ECSI",
        "imagen": blsECSI
    },
    {
        "id": v4(),
        "nombre": "ACLS: Soporte Vital Cardiovascular Avanzado",
        "asc": "ECSI",
        "imagen": aclsECSI
    },
    {
        "id":v4(),
        "nombre": "Primeros Auxilios, RCP y DEA",
        "asc": "ECSI",
        "imagen": paydeaECSI
    },
    {
        "id":v4(),
        "nombre": "Primeros Auxilios en Áreas Remotas",
        "asc": "ECSI",
        "imagen": pazrECSI
    },
    {
        "id":v4(),
        "nombre": "AMLS: Soporte Vital Médico Avanzado",
        "asc": "NAEMT",
        "imagen": amlsNAEMT
    },
    {
        "id":v4() ,
        "nombre": "PHTLS: Soporte Vital de Trauma Prehospitalario",
        "asc": "NAEMT",
        "imagen": phtlsNAEMT
    },
    {
        "id":v4(),
        "nombre": "AHDR: Respuesta a Todos los Riesgos de Desastre",
        "asc": "NAEMT",
        "imagen": ahdrNAEMT
    },
    {
        "id":v4(),
        "nombre": "EPC: Atención Pediátrica de Emergencias",
        "asc": "NAEMT",
        "imagen": epcNAEMT
    },
    {
        "id":v4(),
        "nombre": "EVOS: Seguridad del Operador de Vehículo de SEM",
        "asc": "NAEMT",
        "imagen": evosNAEMT 
    },
    {
        "id":v4() ,
        "nombre": "GEMS: Educación Geriátrica para SEM",
        "asc": "NAEMT",
        "imagen": gemsNAEMT
    },
    {
        "id": v4(),
        "nombre": "PTEP: Trauma Psicológico en Paciente de los SEM",
        "asc": "NAEMT",
        "imagen": ptepNAEMT
    },
    {
        "id": v4(),
        "nombre": "TECC: Atención Táctica a Víctimas de Emergencias",
        "asc": "NAEMT",
        "imagen": teccNAEMT
    },
    {
        "id": v4(),
        "nombre": "Primeros Auxilios Básico, Intermedio y Avanzado",
        "asc": "Protección Civil",
        "imagen": paPC 
    },
    {
        "id": v4(),
        "nombre": "Evacuación de Inmuebles Básico, Intermedio y Avanzado",
        "asc": "Protección Civil",
        "imagen": evPC
    },
    {
        "id": v4(),
        "nombre": "Prevención de Incendios Básico, Intermedio y Avanzado",
        "asc": "Protección Civil",
        "imagen": incPC
    },
    {
        "id": v4(),
        "nombre": "Comunicación Básico, Intermedio y Avanzado",
        "asc": "Protección Civil",
        "imagen": comPC
    },
    {
        "id": v4(),
        "nombre": "Grupo Especial de Ayuda",
        "asc": "Protección Civil",
        "imagen": gespPC
    },
    {
        "id": v4(),
        "nombre": "Búsqueda y Rescate",
        "asc": "Protección Civil",
        "imagen": byrPC
    },
    {
        "id": v4(),
        "nombre": "Pit Crew Reanimación (Ingeniería de la RCP)",
        "asc": "ADIEL",
        "imagen": pcAdiel
    },
    {
        "id": v4(),
        "nombre": "ETLS: Soporte Vital de Emergencia para Trauma",
        "asc": "ADIEL",
        "imagen": etlsAdiel
    },
    {
        "id": v4(),
        "nombre": "DC-3: Comisión de Seguridad e Higiene",
        "asc": "Agente Capacitador Externo",
        "imagen": STPS
    },
    {
        "id": v4(),
        "nombre": "DC-3: Trabajo seguro en alturas",
        "asc": "Agente Capacitador Externo",
        "imagen": STPS
    },
    {
        "id": v4(),
        "nombre": "DC-3: Trabajo seguro en espacios confinados",
        "asc": "Agente Capacitador Externo",
        "imagen": STPS
    },
    {
        "id": v4(),
        "nombre": "DC-3: Trabajo de corte y soldadura",
        "asc": "Agente Capacitador Externo",
        "imagen": STPS
    },
    {
        "id": v4(),
        "nombre": "DC-3: Operación segura de montacargas",
        "asc": "Agente Capacitador Externo",
        "imagen": STPS
    },
    {
        "id": v4(),
        "nombre": "DC-3: Seguridad en los centros de trabajo",
        "asc": "Agente Capacitador Externo",
        "imagen": STPS
    },
    {
        "id": v4(),
        "nombre": "DC-3: Selección de equipo de protección personal",
        "asc": "Agente Capacitador Externo",
        "imagen": STPS
    },

]