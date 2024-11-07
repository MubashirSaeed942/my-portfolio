import React from "react";
import styles from "@/myComponent/Contact/Contact.module.css";

export default function Contact() {

  return (
    < div id="Contact">
    <div className= {styles.contactBg} >
    <div className="h-[4px] w-full bg-[#1a3c69]"> </div>
      <section className={`text-gray-600 body-font relative `}>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53098.41028812054!2d72.9973326560452!3d33.71798779084952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9bc116caa3%3A0x337cd6075e732737!2sBlue%20Area%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1730504376180!5m2!1sen!2s"
              style={{ filter: " contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-gray-100 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 ">
                  Blue Area, Sector F-6 near savour Foods,Islamabad.
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed cursor-pointer">
                  mubashirsaeed393@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed cursor-pointer">0307-0079587</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-gray-200 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-xl p-3 ">
            <h2 className="title-font sm:text-4xl text-3xl mb-4  ml-3 font-medium text-[#077a78] ">
              Contact Me
            </h2>
            <p className="leading-relaxed mb-5 ml-3  text-[#077a78] text-xl font-serif">
              Feel free to Contact me.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="text-white bg-[#077a78] border-0 py-2 px-6 focus:outline-none hover:bg-purple-700 rounded text-lg duration-500">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

