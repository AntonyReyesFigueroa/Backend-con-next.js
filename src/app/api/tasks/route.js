import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma'

export async function GET() {

    const tasks = await prisma.task.findMany()
    console.log(tasks);

    return NextResponse.json(tasks);
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