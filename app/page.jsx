


import Button from "./components/Button"
import Form from "./components/Form"


export default function Home() {



  return (
    <main className="">
      <div className="px-10 py-5">
        <div className="flex flex-col gap-10">
          <h1 className="text-3xl ">TESTING ROUTES</h1>

          <Button url={'/api/users'}/>
          <Button url={'/api/users'}/>
          <Button url={'/api/users'}/>

          <Form />

        </div>
      </div>
    </main>
  )
}
