import * as React from "react";
import { Link } from "gatsby";
import PageLayout from "./../components/PageLayout.js";
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
          <section className="flex flex-wrap w-full mx-auto py-8 px-2 sm:px-8 lg:px-56">
            <div className="sm:pr-8" style={{ minWidth: '300px', maxWidth: '500px' }}>
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

            <div className="mt-8 sm:mt-0">
              <img style={{ minWidth: '150px' }} src="https://placehold.it/376x349" />
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section 
            className="w-full mx-auto py-8 px-2 sm:px-8 lg:px-56"
            style={{
              color: 'rgba(0, 0, 0, 0.8)',
              backgroundColor: 'rgb(239,240,242)',
            }}
          >
            <h3 className="text-xl">COVID-19 Vaccine</h3>
            <h2 className="text-2xl font-bold mb-8">How it works</h2>
            <div className="flex mx-auto justify-between">
              <div className="flex-shrink" style={{ width: '20%' }}><CardUser /></div>
              <div className="xs:block px-1 self-center" style={{ width: '2em' }}><RightArrowIcon /></div>
              <div className="flex-shrink" style={{ width: '20%' }}><CardInformation /></div>
              <div className="xs:block px-1 self-center" style={{ width: '2em' }}><RightArrowIcon /></div>
              <div className="flex-shrink" style={{ width: '20%' }}><CardScreening /></div>
              <div className="xs:block px-1 self-center" style={{ width: '2em' }}><RightArrowIcon /></div>
              <div className="flex-shrink" style={{ width: '20%' }}><CardContacted /></div>
            </div>
          </section>
        </main>
    </PageLayout>
  )
}

export default IndexPage
