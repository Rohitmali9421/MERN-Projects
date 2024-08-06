import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";

function Support() {
  return (
    <section className="bg-blue-100" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 ">
                If you have any questions, concerns, or need assistance, feel free to reach out to us. Our team is here to help you with any inquiries you might have.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <FaLocationDot />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Our Address</h3>
                    <p className="text-gray-600">1230 Maecenas Street, Donec Road</p>
                    <p className="text-gray-600">Maharastra, India</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <MdLocalPhone />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Contact</h3>
                    <p className="text-gray-600">Mobile: +91 8767507569</p>
                    <p className="text-gray-600">Email: support@PeekMart.com</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <MdOutlineWatchLater />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 08:00 - 17:00</p>
                    <p className="text-gray-600">Saturday & Sunday: 08:00 - 12:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider">Name</label>
                    <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="name" />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider">Email</label>
                    <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="email" />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider">Message</label>
                    <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support
