import * as Yup from 'yup';
import "yup-phone-lite";




const BookingValidation = Yup.object({
     name: Yup.string().min(5, "Name Sdould be atleast 5 character").required("Name is required"),
     mobile: Yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10").phone("IN", true, "Phone number is not valid").required("Phone nuber is required"),
     email: Yup.string().email("Please enter a valid email").required("Email is required"),
     address1: Yup.string().min(10, "Address must be atleast 10 characters").max(300, "Address must not more than 300 character").required("Address is required"),
     address2: Yup.string().min(10, "Address must be atleast 10 characters").max(300, "Address must not more than 300 character"),
     city: Yup.string().required("City is required"),
     pincode: Yup.string().min(6, "PIN should atleast be 6 digits").max(6, "PIN should not more than 6 digits").required("PIN code is required"),
     state: Yup.string().required("State/Province is required"),
     date: Yup.date().required("Date is required").min(new Date(), "Date cannot be in the past"),
     // startDate:Yup.date().required("Start date is required").min(new Date(), "Start date cannot be in the past"),
     // endDate:Yup.date().required("End date is required").min(new Date(), "End date cannot be before start date "),
     bookingType: Yup.string().required("Please select booking type"),
     package: Yup.string().required("Please select Package"),
     remark:Yup.string().min(10,"Remark should be minimum 10 characters").max(300,"Remark should not be more than 300 characters").required("Remarks is required")
})


export default BookingValidation