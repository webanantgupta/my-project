import React from 'react'

const AdminContact = ({ modal, closeModal }) => {
  if (modal === false) {
    return null
  }

  return (

    <>
      <div className="fixed inset-0 w-full flex justify-center items-center z-20">
        {/* <div className=' floatCOntainer'> */}
          <div className='z-999 bg-neutral-300  p-5 rounded-2xl h-96 w-86 md:w-[500px] lg:w-[650px] '>
            <div className='flex flex-col'>
              <div>
                <h2 className='text-center font-semibold text-2xl text-indigo-800 mb-3'>Admin Contact Details</h2>
                <hr />
              </div>
              <div className='flex flex-col mt-4'>
                <p className='font-semibold text-xl text-indigo-800'>Name</p>
                <p>Manshi Vardhan Singh</p>
              </div>
              <div className='flex flex-col mt-2'>
                <p className='font-semibold text-xl text-indigo-800'>Phone</p>
                <p>7052118048</p>
              </div>
              <div className='flex flex-col mt-2'>
                <p className='font-semibold text-xl text-indigo-800'>Contact Timing</p>
                <p>10:00 AM To 07:00 PM</p>
              </div>
              <div className='flex flex-col mt-2'>
                <p className='font-semibold text-xl text-indigo-800'>Address</p>
                <p>Maharaja Mahmudabad, Kaiser Bagh, Lucknow, Uttar Pradesh 226018</p>
              </div>
              <div className='flex justify-center items-center mt-3'>
                <button onClick={closeModal} className='cursor-pointer bg-indigo-800 px-5 py-2 rounded-xl text-white font-semibold'>Close</button>
              </div>
            </div>

          </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default AdminContact
