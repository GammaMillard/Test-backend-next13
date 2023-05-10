import { NextRequest } from "next/server";

export async function GET (req) {

    console.log(req);


    return new Response(JSON.stringify({message : 'Hello'}))
}

export async function POST (req) {
    
    console.log(req.cookies.get('test') );
   
    console.log(req.mode);
    console.log(req.headers.get());

    const body = await req.json()
    console.log(body);
    return new Response(JSON.stringify())
}