export default function Header({title, description}) {
    return (
        <>
            <h1 className="text-2xl sm:text-5xl font-bold">{title}</h1>
            <p className="pt-3 pb-5 sm:pb-9 sm:text-xl text-neutral-cool-gray">{description}</p>
        </>
    )
}