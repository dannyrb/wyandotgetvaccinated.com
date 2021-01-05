import * as React from "react";
import { Link } from "gatsby";
import PageLayout from "./../components/PageLayout.js";
import DoctorImage from "./../components/DoctorImage.js";
import CardContacted from "./../components/CardContacted.js";
import CardScreening from "./../components/CardScreening.js";
import CardInformation from "./../components/CardInformation.js";
import CardUser from "./../components/CardUser.js";
import RightArrowIcon from './../components/RightArrowIcon.js';

const IndexPage = () => {
  return (
    <PageLayout>
      <main className="flex flex-col">
          {/* REGISTER */}
          <section className="flex flex-wrap w-full mx-auto py-16 px-2 sm:px-8 lg:px-56">
            <div className="sm:pr-8 mx-auto mt-8 mb-8" style={{ minWidth: '300px', maxWidth: '500px' }}>
              <h1 className="text-3xl mb-2">Register for the COVID-19 Vaccine</h1>
              <p className="text-lg mb-8">To register, click Get Started below.</p>

              <p className="block text-sm mb-16">
                You will need a valid email address and contact information for any other people you register.
              </p>
              
              <Link 
                className="p-3 mb-4 mr-4 font-medium tracking-widest text-white uppercase bg-blue-600 shadow-lg focus:outline-none hover:bg-blue-900 hover:shadow-none"
                to="/form"
              >
                Get Started
              </Link>
              <Link className="text-blue-600" to="/faq">Questions?</Link>
            </div>

            <div className="self-center mt-8 mb-8 mx-auto" style={{ flexGrow: '1' }}>
              <div className="w-full" style={{ maxWidth: '500px', minWidth: '200px' }}>
                <DoctorImage />
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section 
            className="w-full mx-auto pt-8 pb-20 px-2 sm:px-8 lg:px-56"
            style={{
              color: 'rgba(0, 0, 0, 0.8)',
              backgroundColor: 'rgb(239,240,242)',
            }}
          >
            <h3 className="text-xl">COVID-19 Vaccine</h3>
            <h2 className="text-2xl font-bold mb-8">How it works</h2>
            {/* MD+ */}
            <div className="mx-auto justify-between hidden md:flex">
              <div className="flex-shrink" style={{ width: '20%' }}><CardUser /></div>
              <div className="xs:block px-1 self-center" style={{ width: '2em' }}><RightArrowIcon /></div>
              <div className="flex-shrink" style={{ width: '20%' }}><CardInformation /></div>
              <div className="xs:block px-1 self-center" style={{ width: '2em' }}><RightArrowIcon /></div>
              <div className="flex-shrink" style={{ width: '20%' }}><CardScreening /></div>
              <div className="xs:block px-1 self-center" style={{ width: '2em' }}><RightArrowIcon /></div>
              <div className="flex-shrink" style={{ width: '20%' }}><CardContacted /></div>
            </div>
            {/* SM+ */}
            <div className="flex flex-wrap mx-auto justify-around md:hidden">
              <div className="flex-shrink" style={{ width: '45%' }}><CardUser /></div>
              <div className="flex-shrink" style={{ width: '45%' }}><CardInformation /></div>
              <div className="flex-shrink" style={{ width: '45%' }}><CardScreening /></div>
              <div className="flex-shrink" style={{ width: '45%' }}><CardContacted /></div>
            </div>
          </section>
        </main>
    </PageLayout>
  )
}

export default IndexPage
