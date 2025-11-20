import * as Yup from 'yup';
import "yup-phone-lite";




const BookingValidation = Yup.object({
     name:Yup.string().min(5,"Name Sdould be atleast 5 character").required("Name is required"),
     mobile:Yup.string().matches(/^[0-9]{10}$/,"Phone number must be 10").phone("IN",true,"Phone number is not valid").required("Phone nuber is required"),
     email:Yup.string().email("Please enter a valid email").required("Email is required"),
     address:Yup.string().min(10,"Address must be atleast 10 characters").max(300,"Address must not more than 300 character").required("Address is required"),
     startDate:Yup.date().required("Start date is required").min(new Date(), "Start date cannot be in the past"),
     endDate:Yup.date().required("End date is required").min(new Date(), "End date cannot be before start date "),
     bookingType:Yup.string().required("Please select booking type")
})


export default BookingValidation