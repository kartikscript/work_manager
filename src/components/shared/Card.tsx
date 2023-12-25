'use client'
import axios from 'axios'
import { useEffect, useState} from 'react'
import { toast } from 'react-toastify';


interface CardProps {
  task:{
    _id:string
    title: string;
    description: string;
  isPending:boolean
  createdAt: Date
};
  handleCardDelete:()=>void
}

export default function Card ({task,handleCardDelete}:CardProps){
  const [pending, setPending] =useState(task.isPending)
  const [isDeleted,setIsDeleted] =useState(false)
  
 
  useEffect(() => {
    const update=async ()=>{
      await axios.patch('/api/show-tasks', { isPending: pending, _id: task._id });

    }
    update()
  }, [pending]);
  
  const changeStatus = function () {
    setPending((prev) => !prev);
    toast.success('Status Changed !!',{position:'top-center'})
  };

  const deleteCard=async ()=>{
    try{
      setIsDeleted(true)
      await axios.post('/api/show-tasks', {_id:task._id})
      handleCardDelete()
    toast.success('Task Deleted !!',{position:'top-center'})
    }catch(error){
     toast.error('error while deleting task')
    }

    
  }

  if(isDeleted){
return null
  }

  return(

    
       <div  className={`${pending?'bg-red-200': 'bg-green-300'} flex flex-col justify-between w-6/12 mx-auto mb-4 p-4 min-h-[13rem] rounded-lg text-gray-800 transition-all`}>
           <div className='flex justify-between items-center gap-2 '>
             <h1 className="font-bold border-b-2  border-gray-600  text-lg">{task.title} </h1>
             <div onClick={deleteCard} className='bg-white hover:bg-red-300 active:bg-red-500  cursor-pointer rounded-full p-1 '><img src='/trash.svg' alt='trash'/></div>
           </div>
             <p className="font-normal text-sm">{task.description}</p>
              <div className=" flex justify-between items-center text-gray-500 text-xs mt-3">
                 <div className="flex  justify-between items-center gap-3">
                 <span onClick={changeStatus} className={`p-1 rounded-full cursor-pointer ${pending?'bg-red-500': 'bg-green-500'}`}><img src="/toggle.svg"/></span>
                 <span>{`Status : ${pending?'Pending':'Done'}`}</span>
                 </div>
                 <span>{`Created At : ${task.createdAt}`}</span>
              </div>
          </div>
    
  )
}