import { firebaseSetDoc } from "@/app/firebase/firebaseFunctions";

const GET = (req) => {

    
    const auth = req.headers.get('Authorization')

    
    
    return new Response(JSON.stringify(auth))
}


const POST = async (req) => {
    
    
    const body = await req.json()

    const response = await firebaseSetDoc(body)

    return new Response(JSON.stringify(response))
}


export {
    POST,
    GET
}