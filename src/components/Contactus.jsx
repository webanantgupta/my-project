import { useFormik } from "formik";
import ContactValidation from "./ContactValidation";
import CommonBtn from "../common/CommonBtn";
import { CgProfile } from "react-icons/cg";
import { MdMarkEmailRead } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contactus = () => {

    const initialValues = {
        name: "",
        email: "",
        phone:"",
        message: ""
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: ContactValidation,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
        }
    })



    return <div className="pl-20 pr-20">
        <div>
            <h2 className="text-center font-semibold text-indigo-800 text-4xl mt-20 mb-10">Contact Us</h2>
            <div className="mt-2 mb-10">
                <div className="flex justify-center ">
                    <div className="basis-1/2">
                        <iframe className="w-full h-full rounded-l-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.2627014819022!2d80.92936257489292!3d26.852317262684494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfda4ab6d2195%3A0x68bfb5eaf123f55d!2sSafed%20Baradari!5e1!3m2!1sen!2sin!4v1763443279855!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="bg-neutral-300 rounded-r-2xl basis-1/2 w-150 mx-auto flex justify-center items-center p-5">
                        <div className="w-full">
                            <form className="flex flex-col items-center w-full" onSubmit={handleSubmit}>
                                <div className="flex items-center justify-start w-full gap-4 mt-5 mb-5 p-2">
                                    <CgProfile className="text-5xl p-2 text-white bg-indigo-800 rounded-full" />
                                    <div className="flex flex-col flex-1">
                                        <input
                                            className="input pl-5 py-2 text-black font-semibold bg-white rounded-md "
                                            type="text"
                                            placeholder="Enter your name"
                                            name="name"
                                            value={values.name}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        {errors.name && touched.name && <small className="text-red-500 mt-1">{errors.name}</small>}
                                    </div>
                                </div>
                                <div className="flex items-center justify-start w-full gap-4 mt-5 mb-5 p-2">
                                    <MdMarkEmailRead className="text-5xl p-2 text-white bg-indigo-800 rounded-full" />
                                    <div className="flex flex-col flex-1">
                                        <input
                                            className="input pl-5 py-2 font-semibold bg-white rounded-md"
                                            type="email"
                                            placeholder="Enter your email"
                                            name="email"
                                            value={values.email}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        {errors.email && touched.email && <small className="text-red-500 mt-1">{errors.email}</small>}
                                    </div>
                                </div>
                                <div className="flex items-center justify-start w-full gap-4 mt-5 mb-5 p-2">
                                    <FaPhoneAlt className="text-5xl p-2 text-white bg-indigo-800 rounded-full" />
                                    <div className="flex flex-col flex-1">
                                        <input
                                            style={{ color: "black" }}
                                            className="input pl-5 py-2 font-semibold bg-white rounded-md"
                                            type="number"
                                            placeholder="Enter your phone"
                                            name="phone"
                                            value={values.phone}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        {errors.phone && touched.phone && <small className="text-red-500 mt-1">{errors.phone}</small>}
                                    </div>
                                </div>
                                <div className="flex items-center justify-start w-full gap-4 mt-5 mb-5 p-2">
                                    <FiMessageSquare className="text-5xl p-2 text-white bg-indigo-800 rounded-full" />
                                    <div className="flex flex-col flex-1">
                                        <textarea
                                            className="input pl-5 py-2 font-semibold bg-white rounded-md"
                                            type="text"
                                            placeholder="Type your message"
                                            name="message"
                                            value={values.message}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        {errors.message && touched.message && <small className="text-red-500 mt-1">{errors.message}</small>}
                                    </div>

                                </div>
                                <div>
                                    <CommonBtn onSubmit={handleSubmit} className="mt-10" title={"Submit"} bg={"bg-indigo-700"} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className=" flex flex-col items-center justify-between basis-2/6 p-6 shadow-2xl">
                        <FaLocationDot className="text-6xl text-white bg-indigo-800 p-3 rounded-full mb-2" />
                        <p>Safed Baradari,Maharaja Mahmudabad,</p>
                        <p>Kaiser Bagh, Lucknow 226018</p>
                    </div>
                    <div className="flex flex-col items-center justify-start basis-2/6 p-6 shadow-2xl">
                        <FaPhoneAlt className="text-6xl text-white bg-indigo-800 p-3 rounded-full mb-2" />
                        <p>+91 - 770-500-9900</p>
                    </div>
                    <div className="flex flex-col items-center justify-start basis-2/6 p-6 shadow-2xl">
                        <MdMarkEmailRead className="text-6xl text-white bg-indigo-800 p-3 rounded-full mb-2" />
                        <p>safedBaradari123@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>


        {/* <h2 className="text-center font-semibold text-4xl mt-40 mb-10">Contact Us</h2>
        <div className="bg-neutral-300 w-150 mx-auto flex justify-center items-center rounded-2xl h-100 shadow-2xl">
            <div>
                <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                    <div className="flex items-center justify-between gap-4 mt-5 mb-5">
                        <CgProfile className="text-4xl"/>
                        <div className="flex flex-col w-full ">
                            <input
                                className="pl-5 py-2 font-semibold bg-white rounded-md "
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={values.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.name && touched.name && <small className="text-red-500 mt-1">{errors.name}</small>}
                        </div>

                    </div>
                    <div className="flex items-center gap-4 mt-5 mb-5">
                        <MdMarkEmailRead className="text-4xl" />
                        <div className="flex flex-col">
                            <input
                                style={{ color: "black" }}
                                className="pl-5 py-2 font-semibold bg-white rounded-md"
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.email && touched.email && <small className="text-red-500 mt-1">{errors.email}</small>}
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mt-5 mb-5">
                        <FiMessageSquare className="text-4xl" />
                        <div className="flex flex-col">
                            <textarea
                                className="pl-5 py-2 font-semibold bg-white rounded-md"
                                type="text"
                                placeholder="Type your message"
                                name="message"
                                value={values.message}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            {errors.message && touched.message && <small className="text-red-500 mt-1">{errors.message}</small>}
                        </div>

                    </div>
                    <div>
                        <CommonBtn onSubmit={handleSubmit} title={"Submit"} bg={"bg-indigo-700"} />
                    </div>
                </form>
            </div>

        </div> */}
    </div>
}

export default Contactus;