export default function ButtonPrimary({ children, onClick }) {
    return(
        <button onClick={onClick} className="px-6 py-3 font-medium bg-[#b9ff66] border-2 border-[#b9ff66] text-black rounded-xl w-full">{children}</button>
    )
}