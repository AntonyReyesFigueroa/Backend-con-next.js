'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function NewPage() {

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        console.log(title, description);

        const res = await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();
        console.log(data);

        router.push("/");


    }

    return (
        <div className='h-screen flex justify-center items-center flex-col' >
            <h1>Añadir tarea</h1>
            <form onSubmit={onSubmit} className='bg-slate-800 p-10' >
                <input placeholder='Escribir nombre de tarea' className='w-full mb-10 text-black' type="text" name="" id="title" />
                <textarea placeholder='Escribir descripción de tarea' className='w-full mb-10 text-black' name="" id="description"></textarea>
                <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'>Crear tarea</button>
            </form>
        </div>
    )
}
