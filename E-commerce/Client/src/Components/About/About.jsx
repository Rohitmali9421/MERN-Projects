import React from 'react';

function About() {
  return (
    <section className="bg-blue-50  py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">About Us</h2>
          <p className="mt-1 text-4xl leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
            Our Journey
          </p>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 ">
            Discover the story behind our company and what drives us to provide the best service for our customers.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:order-2">
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                src="https://business.adobe.com/blog/basics/media_139f193a6290c0621851ade96ea2c34f43ec08edd.png?width=750&format=png&optimize=medium"
                alt="Company"
              />
            </div>
            <div className="md:order-1 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 ">Who We Are</h3>
              <p className="mt-4 text-lg text-gray-600 ">
                Our company was founded with the mission to provide exceptional service and products to our customers. With years of experience in the industry, we have built a reputation for quality and reliability.
              </p>
              <p className="mt-4 text-lg text-gray-600 ">
                We are a team of dedicated professionals who are passionate about what we do. Our values include integrity, innovation, and customer satisfaction.
              </p>
              <h3 className="mt-8 text-2xl font-bold text-gray-900 ">Our Vision</h3>
              <p className="mt-4 text-lg text-gray-600 ">
                To be the leading company in our industry, known for our commitment to quality, innovation, and customer service. We aim to continuously improve and expand our offerings to meet the evolving needs of our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
