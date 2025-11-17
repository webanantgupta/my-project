import * as Yup from "yup";


const ContactValidation = Yup.object({
      name:Yup.string().min(5,"Name should be atleast 5 letters").required("Name is required"),
      email:Yup.string().email("Please enter a valid email address").required("Email is required"),
      message:Yup.string().min(10,"Message must be minimum 10 letters").max(100,"Message must not more than 100 letters").required("Message is required")
})

export default ContactValidation;