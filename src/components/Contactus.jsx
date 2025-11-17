import { useFormik } from "formik";
import ContactValidation from "./ContactValidation";
import CommonBtn from "../common/CommonBtn";
import { CgProfile } from "react-icons/cg";
import { MdMarkEmailRead } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";


const Contactus = () => {

    const initialValues = {
        name: "",
        email: "",
        message: ""
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: ContactValidation,
        onSubmit: (values) => {
            console.log(values);
        }
    })



    return <div className="mt-20 mb-20">
        <h2 className="text-center font-semibold text-4xl mt-40 mb-10">Contact Us</h2>
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

        </div>
    </div>
}

export default Contactus;