import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {title, description} = await req.json();
    await connectMongoDB();
    await Topic.create({title, description})
    return NextResponse.json({message: 'Topic created successfully'}, {success: 201});
}

export async function GET(req) {

    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({topics})
}
export async function DELETE(request) {
    console.log(request)
    const id = request.nextUrl.searchParams.get("id");
    console.log(id)
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
  }