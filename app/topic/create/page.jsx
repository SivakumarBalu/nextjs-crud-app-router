'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


const CreateTopic = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!title || !description){
      alert('Please fill Title and Description')
    }
    try {
      const resposne = await fetch('/api/topic', 
      {
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify({title, description})
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
        value={title}
        className='border border-slate-500 px-8 py-2'
        onChange={(e) => setTitle(e.target.value)} />
      <input type="text" 
        placeholder='Topic description'
        value={description}
        className='border border-slate-500 px-8 py-2'
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className='bg-green-600 px-6 py-3 w-fit text-white font-bold'>submit</button>
    </form>
  )
}

export default CreateTopic