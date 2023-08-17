export default function Input({type, placeholder}) {
    return (
        <input 
            className="w-full text-sm p-3 border rounded-md border-neutral-light-gray font-semibold"
            type={type} required placeholder={placeholder}
        />
    )
}