import Header from '../../components/Header'
import Button from '../../components/core-components/Button'

export default function Summary() {

    return (
        <>
            <main className="flex flex-col m-4 p-6 mt-[-6rem] sm:mt-[-12rem] z-20 sm:w-3/4 sm:col-span-2 bg-white sm:bg-transparent rounded-xl">
                <Header title="Finishing up" description="Double-check everything looks OK before confirming." />

            </main>

            <Button styles='absolute z-10 right-10 bottom-10 bg-primary-marine-blue text-white'>Confirm</Button>

        </>
    )
}