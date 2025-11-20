import BookingValidation from "./BookingValidation";
import { useFormik } from "formik";

const BookingModal = ({ open, onClose }) => {
  if (!open) return null;

  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    bookingType: "",
    startDate: "",
    endDate: "",
    address: ""
  }


  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: BookingValidation,
    onSubmit(values) {
      console.log(values);

    }
  });





  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-96 sm:w-[500px] lg:w-[650px] max-w-full  max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-lg font-semibold">Book Event</h3>
          <button className="cursor-pointer" onClick={onClose}>✕</button>
        </div>
        {/* Body */}
        <div className="py-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
              <div className="flex flex-col">
                <label>Name</label>
                <input
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your full name"
                  name="name"
                />
              {errors.name && touched.name && <small className="text-red-500">{errors.name}</small>}
              </div>

              <div className="flex flex-col">
                <label>Mobile</label>
                <input
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="mobile"
                  type="number"
                  placeholder="Enter phone number"
                />
              {errors.mobile && touched.mobile && <small className="text-red-500">{errors.mobile}</small>}

              </div>


              <div className="flex flex-col">
                <label>Email</label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                />
              {errors.email && touched.email && <small className="text-red-500">{errors.email}</small>}
              </div>
              <div className="flex flex-col">
                <label for="bookingType">Booking Table</label>
                <select
                  id="bookingType"
                  name="bookingType"
                  value={values.bookingType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
              {errors.bookingType && touched.bookingType && <small className="text-red-500">{errors.bookingType}</small>}
                  <option value="">Select booking type</option>
                  <option value="dateWise">Date Wise</option>
                  <option value="dateRange">Date Range</option>
                </select>
              </div>



              <div className="flex flex-col">
                <label>Start Date</label>
                <input
                  value={values.startDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="startDate"
                  type="date"
                />
              {errors.startDate && touched.startDate && <small className="text-red-500">{errors.startDate}</small>}
              </div>

              <div  className="flex flex-col">
                <label>End Date</label>
                <input
                  value={values.endDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="endDate"
                  type="date"
                />
              {errors.endDate && touched.endDate && <small className="text-red-500">{errors.endDate}</small>}
              </div>

            </div>
            <div className="flex flex-col">
              <label>Address</label>
              <textarea
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                name="address"
                type="textarea"
                placeholder="Enter your full address"
              />
              {errors.address && touched.address && <small className="text-red-500">{errors.address}</small>}
            </div>
            <div className="flex justify-center pt-5">
              <button onSubmit={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded font-semibold cursor-pointer">
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
