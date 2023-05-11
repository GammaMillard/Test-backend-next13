import { firebaseSetDoc } from "@/app/firebase/firebaseFunctions";


const POST = async (req) => {
    
    
    const body = await req.json()

    const response = await firebaseSetDoc(body)

    return new Response(JSON.stringify(response))
}


export {
    POST
}