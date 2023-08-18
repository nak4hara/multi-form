import { Link, useLocation } from 'react-router-dom'
import Header from '../../components/Header'
import Button from '../../components/core-components/Button'

export default function SelectPlan() {
let location = useLocation();
console.log(location.pathname)
    return (
        <>
            <main className="flex flex-col m-4 p-6 mt-[-6rem] sm:mt-[-12rem] z-20 sm:w-3/4 sm:col-span-2 bg-white sm:bg-transparent rounded-xl">
                <Header title="Select your plan" description="You have the option of monthly or yearly billing." />

            </main>
            <Link to='/add-ons' className='absolute z-10 right-10 bottom-10 '>
                <Button styles='bg-primary-marine-blue text-white'>Next Step</Button>
            </Link>
        </>
    )
}