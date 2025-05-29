import { NavLink } from "react-router-dom"
import Line from "../../public/images/Line 3.png"

export default function Benefits() {
    return (
        <div className="py-10 px-16" id="benefits">
            <div className="mb-10">
							<h1 className="text-[4rem] font-light text-[#ffffff99]">Benefits</h1>
						</div>
            <div className="rounded-3xl border px-14 py-14 flex justify-between gap-16">
                <div className="flex flex-col justify-between gap-4">
                    <h4 className="font-medium text-2xl text-[#b9ff66]">Convenience</h4>
                    <div>
                        <p className="text-white text-lg">Avoid the hassle of running errands. With ErrandsPap, you can order anything you need from the comfort of your home and have it delivered straight to your door.</p>
                    </div>
                </div>

                <img src={Line} alt="" />

                <div className="flex flex-col justify-between gap-4">
                    <h4 className="font-medium text-2xl text-[#b9ff66]">Time-saving</h4>
                    <div>
                        <p className="text-white text-lg">Free up your schedule for more important tasks or leisure activities. Our efficient delivery service ensures you spend less time shopping and more time enjoying life.</p>
                    </div>
                </div>

                <img src={Line} alt="" />

                <div className="flex flex-col justify-between gap-4">
                    <h4 className="font-medium text-2xl text-[#b9ff66]">Real-Time Tracking</h4>
                    <div>
                        <p className="text-white text-lg">Stay informed about your order status with our real-time tracking feature. Know exactly when your items will arrive without any guesswork.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}