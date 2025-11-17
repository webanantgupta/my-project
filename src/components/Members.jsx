import { CgProfile } from "react-icons/cg";

const Members = () => {
    return <div className="mt-30 mb-20 pl-5 pr-5">
        <h2 className="text-4xl font-semibold text-center">Members of Safed Baradari</h2>
        <div className="flex flex-wrap justify-evenly mt-20">
            <div className="flex flex-col  justify-center items-center bg-neutral-300 rounded-2xl h-80 w-80 shadow-2xl" >
                <div className="text-9xl mb-10">
                    <CgProfile />
                </div>
                <div>
                    <h4 className="text-2xl font-semibold text-center">Kirti Vardhan Singh</h4>
                    <p className="text-2xl text-center">President</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-neutral-300 rounded-2xl h-80 w-80 shadow-2xl" >
                <div className="text-9xl mb-10">
                    <CgProfile />
                </div>
                <div>
                    <h4 className="text-2xl font-semibold text-center">Manish Vardhan Singh</h4>
                    <p className="text-2xl text-center">Manager</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-neutral-300 rounded-2xl h-80 w-80 shadow-2xl" >
                <div className="text-9xl mb-10">
                    <CgProfile />
                </div>
                <div>
                    <h4 className="text-2xl font-semibold text-center">Manish Vardhan Singh</h4>
                    <p className="text-2xl text-center">Secretary</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-neutral-300 rounded-2xl h-80 w-80 shadow-2xl" >
                <div className="text-9xl mb-10">
                    <CgProfile />
                </div>
                <div>
                    <h4 className="text-2xl font-semibold text-center">S. Bali</h4>
                    <p className="text-2xl text-center ">Assistant Secretary</p>
                </div>
            </div>
        </div>
    </div>
}

export default Members;