import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Button from '../../components/core-components/Button'

export default function SelectPlan() {
    const navigate = useNavigate();

    return (
        <>
            <main className="flex flex-col m-4 p-6 mt-[-6rem] sm:mt-[-12rem] z-20 sm:w-3/4 sm:col-span-2 bg-white sm:bg-transparent rounded-xl">
                <Header
                    title="Select your plan"
                    description="You have the option of monthly or yearly billing."
                />

                <ul className="grid w-full gap-3">
                    <li>
                        <input type="radio" id="plan-arcade" name="plan" value="plan-arcade" className="hidden peer" />
                        <label className="inline-flex gap-4 w-full p-4 bg-white border peer-checked:bg-neutral-alabaster border-neutral-cool-gray rounded-lg cursor-pointer peer-checked:border-primary-purplish-blue">
                            <img className='w-12' src='/src/assets/icon-arcade.svg' />
                            <div className="block">
                                <div className="text-lg font-semibold">Arcade</div>
                                <div className="text-neutral-cool-gray">$9/mo</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="plan-advanced" name="plan" value="plan-advanced" className="hidden peer" />
                        <label className="inline-flex gap-4 w-full p-4 bg-white border peer-checked:bg-neutral-alabaster border-neutral-cool-gray rounded-lg cursor-pointer peer-checked:border-primary-purplish-blue">
                            <img className='w-12' src='/src/assets/icon-advanced.svg' />
                            <div className="block">
                                <div className="text-lg font-semibold">Advanced</div>
                                <div className="text-neutral-cool-gray">$12/mo</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="plan-pro" name="plan" value="plan-pro" className="hidden peer" />
                        <label className="inline-flex gap-4 w-full p-4 bg-white border peer-checked:bg-neutral-alabaster border-neutral-cool-gray rounded-lg cursor-pointer peer-checked:border-primary-purplish-blue">
                            <img className='w-12' src='/src/assets/icon-pro.svg' />
                            <div className="block">
                                <div className="text-lg font-semibold">Pro</div>
                                <div className="text-neutral-cool-gray">$15/mo</div>
                            </div>
                        </label>
                    </li>
                </ul>
            </main>

            <Button
                styles='absolute z-10 right-10 bottom-10 bg-primary-marine-blue text-white'
                onClick={() => { navigate('/add-ons') }}
            >
                Next Step
            </Button>

            <Button
                styles='absolute bg-white left-10 bottom-10 '
                onClick={() => { navigate(-1) }}>
                Go Back
            </Button>
        </>
    )
}