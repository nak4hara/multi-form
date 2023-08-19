export default function Input({type, placeholder, value}) {
    return (
        <input 
            className="w-full text-sm sm:text-lg p-3 border rounded-md border-neutral-light-gray font-semibold"
            type={type} value={value} required placeholder={placeholder}
        />
    )
}