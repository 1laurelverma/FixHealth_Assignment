import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import axios from "axios";
// import mockData from "./mockData";
import "./bookingForm.css";

const BookingForm = () => {
  // const mockDoctors = mockData.doctors;

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
  const [isLoading, setIsLoading] = useState(false);
  const [isParamData, setIsParamData] = useState(false);

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
        alert("Enter Company");
      } else if (
        formData.age.length !== 0 &&
        formData.city.length !== 0 &&
        formData.company.length !== 0
      ) {
        loadData();
        setNumber((prev) => prev + 1);
      } else {
        alert("Kindly fill the Details : ");
      }
    }

    if (number === 2) {
      // console.log("print : ", formData.prevexp, formData.age, formData.prevexp.toLowerCase());
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
      console.log(formData);
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

  const loadData = async () => {
    const citySelected = formData.city.toLowerCase();
    setIsLoading(true);
    let response = await fetch(`https://doctors-mock-api.onrender.com/api/doctors/${citySelected}`);
    const data = await response.json();
    // console.log("data", data);
    setDoctorlist(data);
    // setTimeout(() => {
    setIsLoading(false);
    // }, 20000);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramValue = params.get("city");
    setIsParamData(false);

    if (paramValue) {
      // console.log(paramValue);
      setFormData((prevState) => ({
        ...prevState,
        city: paramValue.toLowerCase(),
      }));
      setIsParamData(true);
    }
  }, []);

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
                    placeholder="Delhi, Mumbai"
                    name="city"
                    value={formData.city}
                    disabled={isParamData}
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
                {isLoading === true ? (
                  <>
                    <div className="flex flex-col justify-center items-center w-full my-10">
                      <h6 className="text-xl mb-4"> Looking for available Doctors ... </h6>
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          class="inline w-10 h-10text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
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
                              <option key={index} value={option.full_name}>
                                <>
                                  <h5>{option.full_name} </h5>(<h6>{option.occupation}</h6>)
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
                          No Doctor in your City, please Choose any other City.
                        </h6>
                      </>
                    )}
                    <div className="flex -mx-3 mt-7">
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
                  </>
                )}
              </div>
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
