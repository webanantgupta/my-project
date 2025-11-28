import BookingValidation from "./BookingValidation";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const BookingModal = ({ open, onClose }) => {

  // const [submit,setSubmit] = useState(null);

  if (!open) return null;

  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    bookingType: "",
    date: "",
    startDate: "",
    endDate: "",
    address1: "",
    address2: "",
    package: "",
    city: "",
    pincode: "",
    state: "",
    remark:""
  }


  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: BookingValidation,
    onSubmit(values, { resetForm }) {
      // console.log("clicked");

      console.log(values);
      resetForm();
      onClose();
      toast.success("Details Submitted Successfully", { autoClose: 1500 })
    }
  });


  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-96 sm:w-[500px] md:w-[680px]  lg:w-[700px] max-w-full  max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-lg font-semibold">Book Event</h3>
          <button className="cursor-pointer" onClick={onClose}>✕</button>
        </div>
        {/* Body */}
        <div className="py-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2">
              <div className="flex flex-col">
                <label>Name*</label>
                <input
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                  className="bg-neutral-300 booking_input p-2"
                />
                {errors.name && touched.name && <small className="text-red-500">{errors.name}</small>}
              </div>
              <div className="flex flex-col">
                <label>Mobile*</label>
                <input
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="mobile"
                  type="number"
                  placeholder="Enter phone number"
                  className="bg-neutral-300 booking_input p-2"
                />
                {errors.mobile && touched.mobile && <small className="text-red-500">{errors.mobile}</small>}
              </div>
              <div className="flex flex-col">
                <label>Email*</label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  className="bg-neutral-300 booking_input p-2"
                />
                {errors.email && touched.email && <small className="text-red-500">{errors.email}</small>}
              </div>
              <div className="flex flex-col">
                <label>Package Type*</label>
                <select
                  className="bg-neutral-300 h-10"
                  id="package"
                  name="package"
                  value={values.package}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select Package</option>
                  <option value="silverPackage">Silver Package</option>
                  <option value="goldPackage">Gold Package</option>
                  <option value="platinumPackage">Platinum Package</option>
                  <option value="premiumDeluxPackage">Delux Package</option>
                  <option value="premiumRoyalPackage">Royal Package</option>
                </select>
                {errors.package && touched.package && <small className="text-red-500">{errors.package}</small>}
              </div>
              <div className="flex flex-col">
                <label for="bookingType">Booking Type*</label>
                <select
                  className="bg-neutral-300 h-10"
                  id="bookingType"
                  name="bookingType"
                  value={values.bookingType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select booking type</option>
                  <option value="dateWise">Date Wise</option>
                  <option value="dateRange">Date Range</option>
                </select>
                {errors.bookingType && touched.bookingType && <small className="text-red-500">{errors.bookingType}</small>}

              </div>

              {/* 
              {values.bookingType === "datewise" && (
                
              )} */}



              {values.bookingType === "dateRange" ? (
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div className="flex flex-col">
                    <label>Start Date</label>
                    <input
                      value={values.startDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="endDate"
                      type="date"
                      className="bg-neutral-300 booking_input p-2"

                    />
                    {errors.startDate && touched.startDate && <small className="text-red-500">{errors.startDate}</small>}
                  </div>

                  <div className="flex flex-col">
                    <label>End Date</label>
                    <input
                      value={values.endDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="endDate"
                      type="date"
                      className="bg-neutral-300 booking_input p-2"

                    />
                    {errors.endDate && touched.endDate && <small className="text-red-500">{errors.endDate}</small>}
                  </div>
                </div>
              ) :
                <div className="flex flex-col">
                  <label>Date*</label>
                  <input
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="date"
                    type="date"
                    className="bg-neutral-300 booking_input p-2"
                  />
                  {errors.date && touched.date && <small className="text-red-500">{errors.date}</small>}
                </div>
              }

              {/* <div  className="flex flex-col">
                <label>End Date</label>
                <input
                  value={values.endDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="endDate"
                  type="date"
                  className="bg-neutral-300 booking_input p-2"

                />
              {errors.endDate && touched.endDate && <small className="text-red-500">{errors.endDate}</small>}
              </div> */}

            </div>

            <div className="flex flex-col">
              <label>Address 1*</label>
              <textarea
                value={values.address1}
                onChange={handleChange}
                onBlur={handleBlur}
                name="address1"
                type="textarea"
                placeholder="Enter your full address"
                className="bg-neutral-300 booking_input p-2"
              />
              {errors.address1 && touched.address1 && <small className="text-red-500">{errors.address1}</small>}
            </div>

            <div className="flex flex-col">
              <label>Address 2</label>
              <textarea
                value={values.address2}
                onChange={handleChange}
                onBlur={handleBlur}
                name="address2"
                type="textarea"
                placeholder="Enter second address if any"
                className="bg-neutral-300 booking_input p-2"
              />
              {errors.address2 && touched.address2 && <small className="text-red-500">{errors.address2}</small>}
            </div>
            
             
          <div className="flex flex-col">
                <label>Remarks*</label>
                <input
                  className="bg-neutral-300 p-2 booking_input"
                  placeholder="Remarks"
                  name="remark"
                  value={values.remark}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.city && touched.city && <small className="text-red-500">{errors.remark}</small>}
              </div>

            <div className="flex flex-col gap-2 mt-2 lg:flex-row lg:justify-between">
              <div className="flex flex-col">
                <label>City</label>
                <input
                  className="bg-neutral-300 p-2 booking_input"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.city && touched.city && <small className="text-red-500">{errors.city}</small>}
              </div>

              <div>
                <div className="flex flex-col">
                  <label>ZIP / Poastal Code*</label>
                  <input
                    className="bg-neutral-300 p-2 booking_input"
                    placeholder="PIN Code"
                    name="pincode"
                    value={values.pincode}
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.pincode && touched.pincode && <small className="text-red-500">{errors.pincode}</small>}
                </div>
              </div>

              <div>
                <div className="flex flex-col">
                  <label>State / Province*</label>
                  <input
                    className="bg-neutral-300 p-2 booking_input"
                    placeholder="State"
                    name="state"
                    value={values.state}
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.state && touched.state && <small className="text-red-500">{errors.state}</small>}
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-5">
              <button type="submit" onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded font-semibold cursor-pointer">
                Confirm Booking
              </button>
            </div>

          </form>
        </div>

        {/* Footer */}
        {/* <div className="flex justify-center gap-4 border-t pt-3"> */}

        {/* <button onClick={onClose} className="border px-4 py-2 rounded cursor-pointer">
            Decline
          </button> */}
        {/* </div> */}

      </div>
    </div>
  );
};

export default BookingModal;
