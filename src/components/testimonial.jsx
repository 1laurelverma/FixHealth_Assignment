import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./testimonial.css";

const testimonial = () => {
  const Reviews = [
    {
      name: "Nishith Patel",
      text: "My frozen shoulder is gone , Your assessment method is so good & patient support resolves issues promptly. I thank FixHealth for help. My frozen shoulder is gone , Your assessment method is so good",
      img: "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FPatel_xOznYxGIr5.png%3FupdatedAt%3D1686564335378&w=1920&q=75",
    },
    {
      name: "Pranjal Deep",
      text: "Sitting job back pain eased, They worked around time zone variations to accommodate my schedule I thank FixHealth for helping me. My frozen shoulder is gone , Your assessment method is so good",
      img: "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FDeep_P-vGzCQ88.png%3FupdatedAt%3D1686564335311&w=1920&q=75",
    },
    {
      name: "Rashmi",
      text: "Fixed back pain from home, Quality, pocket friendly & consistent care is what Fix Health stands for. I thank FixHealth for helping me lot. My frozen shoulder is gone , Your assessment method is so good",
      img: "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FRashmi_KEXRN9maT.png%3FupdatedAt%3D1686564335393&w=1920&q=75",
    },
    {
      name: "Aman joshi",
      text: "Sitting job back pain eased, They worked around time zone variations to accommodate my schedule I thank FixHealth for helping me. My frozen shoulder is gone , Your assessment method is so good",
      img: "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FDeep_P-vGzCQ88.png%3FupdatedAt%3D1686564335311&w=1920&q=75",
    },
    {
      name: "Rashmi",
      text: "Fixed back pain from home, Quality, pocket friendly & consistent care is what Fix Health stands for. I thank FixHealth for helping me lot.My frozen shoulder is gone , Your assessment method is so good",
      img: "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FRashmi_KEXRN9maT.png%3FupdatedAt%3D1686564335393&w=1920&q=75",
    },
  ];

  return (
    <section className=" bg-gray-900  pb-12" id="reviewsection">
      <div className="mx-auto max-w-screen-2xl px-8 py-12 sm:px-6 lg:px-12 lg:py-16">
        <h2 className="text-center pb-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Reviews from our Customers
        </h2>

        <div
          style={{
            display: "flex",
            marginTop: "90px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="fa-solid fa-circle-arrow-left review-swiper-button-prev prev-next-button"></div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={{
              nextEl: ".review-swiper-button-next",
              prevEl: ".review-swiper-button-prev",
            }}
            // scrollbar={{ draggable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              700: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-slider"
          >
            {Reviews.map((review, index) => {
              return (
                <>
                  <SwiperSlide>
                    <blockquote
                      className="rounded-lg bg-gray-100 h-full p-6 shadow-sm sm:p-8 "
                      key={index}
                    >
                      <div className="flex items-center gap-4">
                        <img
                          alt="user"
                          src={review.img}
                          className="h-14 w-14 rounded-full object-cover"
                        />

                        <div>
                          <div className="flex justify-center gap-0.5 text-indigo-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>

                          <p className="mt-0.5 text-lg font-medium text-indigo-500">
                            {review.name}
                          </p>
                        </div>
                      </div>

                      <p className="mt-4 text-gray-700 line-clamp-4">{review.text}</p>
                    </blockquote>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
          <i className="fas fa-circle-arrow-right review-swiper-button-next prev-next-button"></i>
        </div>
      </div>
    </section>
  );
};

export default testimonial;
