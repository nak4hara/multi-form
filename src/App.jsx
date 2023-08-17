import Aside from "./components/Aside";
import Forms from "./components/Forms/forms";
import Button from "./components/core-components/Button";


export default function App() {

  return (
    <div className="flex flex-col">

      <Aside />
      <div className="absolute top-44 w-full h-screen bg-neutral-light-gray inline-block"></div>

      <main className="absolute top-20 bg-white m-4 p-6  rounded-xl">
        <h1 className="text-2xl sm:text-4xl font-bold">Personal Info</h1>
        <p className="pt-3 pb-5 text-neutral-cool-gray">Please provide your name, email address and phone number.</p>
        <Forms />
      </main>
        <Button color='absolute z-10 right-10 bottom-10 bg-primary-marine-blue text-white'>Next Step</Button>
    </div>
  )
}
