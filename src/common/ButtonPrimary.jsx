export default function ButtonPrimary({ children, onClick }) {
    return(
        <button onClick={onClick} className="px-3 lg:px-6 py-1.5 lg:py-3 font-medium bg-[#b9ff66] border-2 border-[#b9ff66] text-black text-xs lg:text-base rounded-xl w-full">{children}</button>
    )
}