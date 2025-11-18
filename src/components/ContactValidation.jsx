import * as Yup from "yup";
import "yup-phone-lite"


const ContactValidation = Yup.object({
      name:Yup.string().min(5,"Name should be atleast 5 letters").required("Name is required"),
      email:Yup.string().email("Please enter a valid email address").required("Email is required"),
      phone:Yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").phone("IN",true,"Phone number is not valid").required("Phone number is required"),
      message:Yup.string().min(10,"Message must be minimum 10 letters").max(100,"Message must not more than 100 letters").required("Message is required")
})

export default ContactValidation;