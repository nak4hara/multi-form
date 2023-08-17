export default function Button({children, color, onClick}) {
    return(
        <button className={`${color} p-2 w-32 rounded-lg font-semibold`} onClick={onClick}>
            {children}
        </button>
    )
}