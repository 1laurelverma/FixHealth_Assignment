import React, { useEffect, useState } from "react";
import "./bookingForm.css";

const BookingForm = () => {
  const mockDoctors = [
    {
      name: "Dr. Sarah Johnson",
      expertise: "Cardiology",
      city: "New York",
    },
    {
      name: "Dr. Michael Smith",
      expertise: "Dermatology",
      city: "New York",
    },
    {
      name: "Dr. Emily Davis",
      expertise: "Pediatrics",
      city: "New York",
    },
    {
      name: "Dr. David Miller",
      expertise: "Orthopedics",
      city: "New York",
    },
    {
      name: "Dr. Jessica White",
      expertise: "Neurology",
      city: "New York",
    },
    {
      name: "Dr. Brian Lee",
      expertise: "Ophthalmology",
      city: "Los Angeles",
    },
    {
      name: "Dr. Megan Turner",
      expertise: "Gastroenterology",
      city: "Los Angeles",
    },
    {
      name: "Dr. Christopher Brown",
      expertise: "Psychiatry",
      city: "Los Angeles",
    },
    {
      name: "Dr. Olivia Martinez",
      expertise: "Obstetrics and Gynecology",
      city: "Los Angeles",
    },
    {
      name: "Dr. Kevin Kim",
      expertise: "Pulmonology",
      city: "Los Angeles",
    },
    {
      name: "Dr. Amanda Carter",
      expertise: "Rheumatology",
      city: "Chicago",
    },
    {
      name: "Dr. Benjamin Harris",
      expertise: "Urology",
      city: "Chicago",
    },
    {
      name: "Dr. Lauren Turner",
      expertise: "Endocrinology",
      city: "Chicago",
    },
    {
      name: "Dr. Nicholas Wilson",
      expertise: "Allergy and Immunology",
      city: "Chicago",
    },
    {
      name: "Dr. Ashley Rodriguez",
      expertise: "Nephrology",
      city: "Chicago",
    },
    {
      name: "Dr. Matthew Turner",
      expertise: "Oncology",
      city: "Houston",
    },
    {
      name: "Dr. Kimberly Lewis",
      expertise: "Infectious Diseases",
      city: "Houston",
    },
    {
      name: "Dr. Jordan Garcia",
      expertise: "Hematology",
      city: "Houston",
    },
    {
      name: "Dr. Natalie Adams",
      expertise: "Otolaryngology",
      city: "Houston",
    },
    {
      name: "Dr. Samuel Hernandez",
      expertise: "Cardiac Surgery",
      city: "Houston",
    },
    {
      name: "Dr. Sophia Rodriguez",
      expertise: "Plastic Surgery",
      city: "Miami",
    },
    {
      name: "Dr. Ethan Turner",
      expertise: "Sports Medicine",
      city: "Miami",
    },
    {
      name: "Dr. Isabella Martinez",
      expertise: "Geriatrics",
      city: "Miami",
    },
    {
      name: "Dr. Daniel Johnson",
      expertise: "Vascular Surgery",
      city: "Miami",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    age: "",
    city: "",
    company: "",
    cheifComplaints: "",
    prevexp: "",
    doctor: "",
  });

  const [number, setNumber] = useState(0);
  const [doctorlist, setDoctorlist] = useState([]);

  const ValidateNext = () => {
    if (number === 0) {
      if (formData.name.length === 0) {
        alert("Enter name");
      } else if (formData.phonenumber.length === 0) {
        alert("Enter phoneNumber");
      } else if (isNaN(formData.phonenumber) || formData.phonenumber.length !== 10) {
        alert("Enter valid phoneNumber");
      } else if (formData.name.length !== 0 && formData.phonenumber.length !== 0) {
        setNumber((prev) => prev + 1);
      } else {
        alert("Kindly fill all the Details : ");
      }
    }

    if (number === 1) {
      if (formData.age.length === 0) {
        alert("Enter age");
      } else if (formData.city.length === 0) {
        alert("Enter City");
      } else if (formData.company.length === 0) {
        alert("Enter Comapny");
      } else if (
        formData.age.length !== 0 &&
        formData.city.length !== 0 &&
        formData.company.length !== 0
      ) {
        setNumber((prev) => prev + 1);
      } else {
        alert("Kindly fill the Details : ");
      }
    }

    if (number === 2) {
      console.log("print : ", formData.prevexp, formData.age, formData.prevexp.toLowerCase());
      if (formData.cheifComplaints.length === 0) {
        alert("Enter cheifComplaint ");
      } else if (parseInt(formData.age) >= 40 && formData.prevexp.length === 0) {
        alert("Enter Previous experience with Physiotherapy");
      } else if (parseInt(formData.age) >= 40) {
        if (formData.prevexp.toLowerCase() === "yes" || formData.prevexp.toLowerCase() === "no") {
          setNumber((prev) => prev + 1);
        } else {
          alert("Enter Yes or No Previous experience with Physiotherapy");
        }
      } else if (formData.cheifComplaints.length !== 0 && parseInt(formData.age) < 40) {
        setNumber((prev) => prev + 1);
      } else if (
        formData.cheifComplaints.length !== 0 &&
        parseInt(formData.age) >= 40 &&
        formData.prevexp.length !== 0
      ) {
        setNumber((prev) => prev + 1);
      } else {
        alert("Kindly fill all the Details : ");
      }
    }
  };

  const handleSubmit = () => {
    if (number === 3 && formData.doctor.length !== 0) {
      alert("Your Data has been Submitted ");
      setNumber(0);
      setFormData({
        name: "",
        phonenumber: "",
        age: "",
        city: "",
        company: "",
        cheifComplaints: "",
        prevexp: "",
        doctor: "",
      });
    } else {
      alert("Please select a Doctor ");
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    let doctors = mockDoctors.filter(
      (doctor) => doctor.city.toLowerCase() === formData.city.toLowerCase()
    );
    setDoctorlist(doctors);
  }, [formData.city]);

  const conditionalComponent = () => {
    switch (number) {
      case 0:
        return (
          <div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor="" className="text-xs font-semibold px-1">
                  Name
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="Text"
                    className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Laurel Verma"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-12">
                <label htmlFor="" className="text-xs font-semibold px-1">
                  Phone No.
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="tel"
                    name="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="9412328868"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <button
                  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  type="submit"
                  onClick={ValidateNext}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor="" className="text-xs font-semibold px-1">
                  Age
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="number"
                    className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="10"
                    name="age"
                    min={0}
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor="" className="text-xs font-semibold px-1">
                  City
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="text"
                    className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Miami , chicago"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor="" className="text-xs font-semibold px-1">
                  Company
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="text"
                    className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Amazon pvt limited"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <button
                  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  onClick={() => setNumber((prev) => prev - 1)}
                >
                  Previous
                </button>
              </div>
              <div className="w-full px-3 mb-5">
                <button
                  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  onClick={ValidateNext}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <label htmlFor="" className="text-xs font-semibold px-1">
                  Cheif Complaint
                </label>
                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                  </div>
                  <textarea
                    name="cheifComplaints"
                    value={formData.cheifComplaints}
                    onChange={handleChange}
                    type="Text"
                    className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Type your complaint"
                  />
                </div>
              </div>
            </div>
            {parseInt(formData.age) >= 40 && (
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Previous experience with Physiotherapy
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      name="prevexp"
                      value={formData.prevexp}
                      onChange={handleChange}
                      type="Text"
                      className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Yes or No"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <button
                  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  onClick={() => setNumber((prev) => prev - 1)}
                >
                  Previous
                </button>
              </div>
              <div className="w-full px-3 mb-5">
                <button
                  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  onClick={ValidateNext}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                {doctorlist.length !== 0 ? (
                  <>
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Doctor
                    </label>

                    <div className="flex">
                      <select
                        id="doctor"
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value={""}>Select a Doctor</option>
                        {doctorlist.map((option, index) => (
                          <option key={index} value={option.name}>
                            <>
                              <h5>{option.name} </h5>(<h6>{option.expertise}</h6>)
                            </>
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <h6 className="text-center font-bold">OOPS !!! </h6>
                    <h6 className="text-center">
                      No Doctor in your City, please Choice any other City.
                    </h6>
                  </>
                )}
              </div>
            </div>
            <div className="flex -mx-3">
              <div className="w-full px-3 mb-5">
                <button
                  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  onClick={() => setNumber((prev) => prev - 1)}
                >
                  Previous
                </button>
              </div>
              {doctorlist.length !== 0 && (
                <div className="w-full px-3 mb-5">
                  <button
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return <h1>Default</h1>;
    }
  };

  return (
    <div
      className="min-w-screen  bg-gray-900 flex items-center justify-center px-5 py-5 "
      id="bookingformm"
    >
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden my-28"
        style={{ maxWidth: "1000px" }}
      >
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2  ">
            <img
              className="formImage"
              src="https://cdni.iconscout.com/illustration/premium/thumb/annual-health-checkup-4563329-3784170.png"
              alt="sideimage"
            ></img>
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">Consultation</h1>
              <p>Book an appointment for FREE</p>
            </div>
            {conditionalComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
