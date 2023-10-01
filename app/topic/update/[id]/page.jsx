import React from 'react'
import EditTopicForm from '../../../../components/EditTopicForm'

const getTopicById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/topic/${id}`, {
        cache: 'no-store'
        })
        console.log(response)
        if(!response.ok) {
            throw new Error('Could not find topic')
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}


const EditTopic = async ({params}) => {
    const {id} = params;
    console.log(id, params)
    const {topic} = await getTopicById(id)
    const {title, description} = topic;


  return (
    <EditTopicForm id={id} title={title} description={description}/>
  )
}

export default EditTopic