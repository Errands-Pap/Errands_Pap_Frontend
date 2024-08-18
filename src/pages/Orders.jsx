import HomeAndBuilding from "../common/HomeAndBuilding"
import ButtonPrimary from "../common/ButtonPrimary"

export default function Orders(){
  return (
    <div className="px-16 bg-[#06050f] w-full">
			<div className="flex flex-col justify-center items-center w-full space-y-10">
				<HomeAndBuilding />

				<div className="w-1/8">
					<ButtonPrimary>New Order</ButtonPrimary>
				</div>

				<div>
					
				</div>
			</div>
		</div>
  )
}