export default function Button({children, styles, onClick}) {
    return(
        <button className={`${styles} p-4 w-32 rounded-lg font-semibold`} onClick={onClick}>
            {children}
        </button>
    )
}