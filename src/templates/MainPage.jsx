import { Outlet } from 'react-router-dom'
import Aside from '../components/Aside'

export default function MainPage() {

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-3 sm:w-screen sm:h-screen sm:place-items-center">
      <aside className=" w-full flex sm:ml-12 justify-center h-52 sm:h-[95%] -z-10 sm:z-0 sm:rounded-3xl bg-cover bg-bottom bg-no-repeat bg-sidebar-desktop">
        <Aside />
        <div className="absolute sm:hidden top-44 w-full h-[80vh] bg-neutral-light-gray inline-block"></div>
      </aside>

      <Outlet />
    </div>
  )
}