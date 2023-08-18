import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Button from '../../components/core-components/Button'

export default function AddOns() {

    return (
        <>
            <main className="flex flex-col m-4 p-6 mt-[-6rem] sm:mt-[-12rem] z-20 sm:w-3/4 sm:col-span-2 bg-white sm:bg-transparent rounded-xl">
                <Header title="Pick add-ons" description="Add-ons help enhance your gaming experience." />
            </main>
            <Link to='/summary' className='absolute z-10 right-10 bottom-10 '>
                <Button styles='bg-primary-marine-blue text-white'>Next Step</Button>
            </Link>
        </>
    )
}