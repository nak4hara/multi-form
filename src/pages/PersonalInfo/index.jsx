import Forms from '../../components/Forms'
import Header from '../../components/Header'
import Button from '../../components/core-components/Button'
import { Link } from 'react-router-dom'

export default function PersonalInfo() {

    return (
        <>
            <main className="flex flex-col m-4 p-6 mt-[-6rem] sm:mt-[-12rem] z-20 sm:w-3/4 sm:col-span-2 bg-white sm:bg-transparent rounded-xl">
                <Header title="Personal Info" description="Please provide your name, email address, and phone number." />
                <Forms />
            </main>

            <Link to='/select-plan' className='absolute z-10 right-10 bottom-10 '>
                <Button styles='bg-primary-marine-blue text-white'>Next Step</Button>
            </Link>
        </>
    )
}