export default function ButtonSecondary({ children, onClick }) {
    return (
        <button onClick={onClick} className="px-6 py-3 font-medium border-2 border-[#b9ff66] text-[#b9ff66] rounded-xl w-full">{children}</button>
    )
}