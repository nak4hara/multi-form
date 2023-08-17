const Step = ({numberStep, titleStep}) => {
    return (
        <div>
            <div className="flex items-center justify-center w-8 h-8 text-xs font-semibold border-white border rounded-full text-white ">
                {numberStep}
            </div>
            <section className="hidden sm:flex flex-col p-4 text-white">
                <p className="text-sm">STEP {numberStep}</p>
                <h5 className="font-bold">{titleStep}</h5>
            </section>
        </div>
    )
}

export default Step;