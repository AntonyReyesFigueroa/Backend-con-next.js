
import Image from "next/image";
import { prisma } from "@/libs/prisma";

export default async function Home() {



  // const res = await fetch('http://localhost:3000/api/tasks')
  // const data = await res.json()
  const data = await prisma.task.findMany()
  console.log(data);



  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-4 gap-3 mt-20">
        {
          data.map((task, i) => (
            <div key={i} className="bg-slate-800 p-3 hover:bg-slate-700">
              <div>title:  {task.title} </div>
              <div>description:{task.description}  </div>
              <p>{new Date(task.createdAT).toLocaleDateString()} </p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
