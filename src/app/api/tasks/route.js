import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma'

export async function GET() {

    const res = await fetch('https://66ca96db59f4350f064f7699.mockapi.io/incidencias')
    const data = await res.json();

    const tasks = await prisma.task.findMany()
    console.log(tasks);

    // return NextResponse.json(tasks);

    return NextResponse.json(data);
}

export function POST() {
    return NextResponse.json("Creando tareas")
}


export function DELETE() {
    return NextResponse.json("Eliminando")
}

export function PUT() {
    return NextResponse.json("Actualizando tarea")
}