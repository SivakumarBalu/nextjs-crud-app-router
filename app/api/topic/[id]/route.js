import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";


export async function GET(req, {params}) {
    const {id} = params
    console.log(id, params)
    // await connectMongoDB()
    const topic = await Topic.findOne({ _id : id})
    return NextResponse.json({topic}, {status: 200})
}

export async function PUT(req, {params}) {
    const {id} = params
    console.log(id, params)
    const {newTitle, newDescription} = await req.json()
    console.log(newTitle, newDescription)
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id, {title: newTitle, description: newDescription})
    return NextResponse.json({message: 'Topic updated'}, {status: 200})
}