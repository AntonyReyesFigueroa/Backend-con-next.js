import { NextResponse } from "next/server";

export function GET(request, { params }) {
    return NextResponse.json(`Obteniendo tarea ${params.id}`)
} 