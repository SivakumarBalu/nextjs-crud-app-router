'use client'
import {useState} from 'react'
import { useRouter } from 'next/navigation'

const EditTopicForm = ({id, title, description}) => {

    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    const router = useRouter()
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      if(!newTitle || !newDescription){
        alert('Please fill Title and Description')
      }
      try {
        const resposne = await fetch(`/api/topic/${id}`, 
        {
          method: 'PUT',
          headers: { 'content-type': 'application/json'},
          body: JSON.stringify({newTitle, newDescription})
        })
        if (resposne.ok) {
          alert('Successfully created topic')
          router.refresh()
          router.push('/')
        } else {
          throw new Error('Failed to create topic')
        }
  
      } catch (error) {
        console.log(error)
      }
  
  
  
    }
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input 
          type="text"
          placeholder='Topic title'
          value={newTitle}
          className='border border-slate-500 px-8 py-2'
          onChange={(e) => setNewTitle(e.target.value)} />
        <input type="text" 
          placeholder='Topic description'
          value={newDescription}
          className='border border-slate-500 px-8 py-2'
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button className='bg-green-600 px-6 py-3 w-fit text-white font-bold'>Update</button>
      </form>
    )
}

export default EditTopicForm