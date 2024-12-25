import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma'

export async function GET() {

    // const res = await fetch('https://66ca96db59f4350f064f7699.mockapi.io/incidencias')
    // const data = await res.json();

    const tasks = await prisma.task.findMany()
    console.log(tasks);

    // return NextResponse.json(tasks);

    return NextResponse.json(tasks);
}

export async function POST(request) {
    try {
        // Parseamos los datos del cuerpo de la solicitud
        const { title, description } = await request.json();

        // Validamos que `title` no esté vacío
        if (!title) {
            return NextResponse.json({ error: "El título es obligatorio" }, { status: 400 });
        }

        // Creamos la tarea en la base de datos
        const newTask = await prisma.task.create({
            data: {
                title,
                description: description || null, // Descripción opcional
            },
        });

        // Devolvemos la tarea creada
        return NextResponse.json(newTask, { status: 201 });
    } catch (error) {
        console.error("Error al crear la tarea:", error);
        return NextResponse.json({ error: "Error al crear la tarea" }, { status: 500 });
    }
}


export function DELETE() {
    return NextResponse.json("Eliminando")
}

export function PUT() {
    return NextResponse.json("Actualizando tarea")
}