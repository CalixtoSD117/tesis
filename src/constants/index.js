import { p6 } from "../assets";
import { amazon, logmanza, mercado, ragel } from "../assets";



export const user =[
    {
        name: 'Juan Pablo ',
        lastname: 'Gomez Ochoa',
        gmail: 'Juan@ucol.mx',
        role: 'Administrador',
        empresa: 'Facebook',
        dispositivos: '1',
        puerto: 'Manzanillo',
        area:'A1',
        img: p6,
    }
]

export const contenedor = [
    {
        id: 'DEV170',
        ubicacion: 'Manzanillo',
        estado: 'activo',
        dispositivo: 'conectado',
        temperatura: "50",
        bateria: "10",
        nombre: 'Devkit 0',
        patio: 'A1'
    }
]


export const reportes = [
    {
        id: 'DEV170A',
        title: 'Contenedor H1 Movido',
        date: '12/21/2023',
        type: 'Traslado',
        report: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque veniam, illo maiores aut quisquam aspernatur ducimus modi eum provident.'

    },
    {
        id: 'DEV171A',
        title: 'Contenedor H2 Movido',
        date: '12/21/2021',
        type: 'Traslado',
        report: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque veniam, illo maiores aut quisquam aspernatur ducimus modi eum provident.'

    },
    {
        id: 'DEV172A',
        title: 'Contenedor H3 Movido',
        date: '12/21/2022',
        type: 'Traslado',
        report: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque veniam, illo maiores aut quisquam aspernatur ducimus modi eum provident.'

    },

]

export const empresas = [
    {
        img: amazon
    },
    {
        img: mercado
    },
    {
        img: logmanza
    },

]