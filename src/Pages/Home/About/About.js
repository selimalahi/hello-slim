import React from 'react';
import about from '../../../assets/image/about/about.png';

const About = () => {
    return (
        <section className="mt-24">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={about}
            className="lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div className=" ml-6 mr-5">
            <h1 className="text-5xl font-bold">About Us!</h1>
            <p className="py-6">
            We, Joy Motors, situated at Malad West, Mumbai, Maharashtra are one of the most trusted second hand car dealer in the city. We are leading second hand car dealer where you can buy a used car of any brand. Our mission is to bring joy & delight into car buying & ownership. It’s as simple as that. We believe in the quality & dependability of our used cars. Keeping in mind the customer’s expectations and concerns our expert team gets a right car for you.

            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
    );
};

export default About;