const Step = ({numberStep, titleStep, colorNumber}) => {
    return (
        <div className="sm:flex sm:items-center sm:pl-3 ">
            <div className={`${colorNumber} flex items-center justify-center w-8 sm:w-12 h-8 sm:h-12 text-xs sm:text-xl font-semibold border-white border rounded-full text-white `}>
                {numberStep}
            </div>
            <section className="hidden sm:flex sm:flex-col p-4 text-white">
                <p className="text-sm sm:text-xl">STEP {numberStep}</p>
                <h5 className="font-bold sm:text-xl">{titleStep}</h5>
            </section>
        </div>
    )
}

export default Step;