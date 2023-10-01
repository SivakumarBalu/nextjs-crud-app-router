
import DeleteBtn from './DeleteBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

const getTopics = async () => {
  try {
    const resposne = await fetch('http://localhost:3000/api/topic', {
      cache: 'no-store'
    })
    if (!resposne.ok)
    {
      throw new Error('Failed to get topic')
    }
    return resposne.json()
  } catch (error) {
    console.log("Error loading topic: ", error)
  }
}
const Topics = async () => {
  const {topics} = await getTopics()
  

  return (
    <>
    {topics.map((t) => (
          <div key={t._id}
          className='flex justify-between items-start gap-5 my-3 p-4 border border-slate-300'>
          <div>
             <h1 className='font-bold text-2xl'>{t.title}</h1>
             <div>{t.description}</div>
          </div>
          <div className='flex gap-2'>
             <DeleteBtn id={t._id}/>
             <Link href={`/topic/update/${t._id}`}>
                 <HiPencilAlt size={24} />
             </Link>
          </div>
         </div>
    ))}

    </>
  )
}

export default Topics