import {
    RiPencilLine,
    RiShareFill,
    RiShieldCheckLine,
    RiSmartphoneLine,
    RiUserLocationLine,
} from "react-icons/ri";

export const InfoLocation = () => {
    return (
        <div className=" z-40 mt-72 p-6 ">
            <h3 className="text-2xl font-normal text-gray-900 ">Lorem ipsum dolor sit.</h3>
            <p className="mt-1 text-sm text-gray-700">Lorem ipsum dolor sit amet.</p>

            <div className="mt-6 text-xl text-blue-800 space-y-3">
                <div className="flex gap-3 items-center">
                    <RiUserLocationLine />
                    <span className="text-base text-black font-normal">Lorem ipsum dolor sit.</span>
                </div>
                <div className="flex gap-3 items-center">
                    <RiSmartphoneLine />
                    <span className="text-base text-black font-normal">Lorem ipsum dolor sit.</span>
                </div>
                <div className="flex gap-3 items-center">
                    <RiShieldCheckLine />
                    <span className="text-base text-black font-normal">Lorem ipsum dolor sit.</span>
                </div>
                <div className="flex gap-3 items-center">
                    <RiShareFill />
                    <span className="text-base text-black font-normal">Lorem ipsum dolor sit.</span>
                </div>
            </div>

            <button className="flex items-center mx-auto border py-2 px-5 mt-6 rounded-lg border-gray-400">
                <RiPencilLine />
                <span className="text-base text-black pl-1 font-normal">Sugerir una ubicación</span>
            </button>
        </div>
    );
};
