'use client'
import { useRouter } from 'next/navigation'
import {HiOutlineTrash} from 'react-icons/hi'

const DeleteBtn = ({id}) => {
  console.log(id)
  const router = useRouter()
  const deleteTopic = async() => {
    const confirmed = confirm('Do you want to delete this')
    if (confirmed) {
      const response = await fetch(`http://localhost:3000/api/topic?id=${id}`, {method: 'DELETE'})
      if (response.ok) {
        router.refresh()        
      }

  }
}
  return (
    <button onClick={deleteTopic} size={24} className='text-red-400'>
        <HiOutlineTrash size={24}/>
    </button>
  )
}

export default DeleteBtn