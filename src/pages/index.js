import * as React from "react"
import PageLayout from "./../components/PageLayout.js";

const IndexPage = () => {
  return (
    <PageLayout>
      <main className="flex flex-col container">
          {/* REGISTER */}
          <section className="flex w-full mx-auto py-8 px-56">
            <div>
              <h1 className="text-3xl mb-2">Register for the COVID-19 Vaccine</h1>
              <p className="text-lg">Registration is now open for the COVID-19 vaccine in Wyandot County.
              To register, click Get Started below.</p>

              <span className="text-sm">You will need a valid email address and contact information for any other people you register.</span>
              
              <div>
                <button>Get Started</button>
                <a href="#">Questions?</a>
              </div>
            </div>

            <div>
              <img src="https://placehold.it/376x349" />
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section 
            className="w-full mx-auto py-8 px-56"
            style={{
              color: 'rgba(0, 0, 0, 0.8)',
              backgroundColor: 'rgb(239,240,242)',
            }}
          >
            <h3 className="text-xl">COVID-19 Vaccine</h3>
            <h2 className="text-2xl font-bold">How it works</h2>
            <div className="flex">
              <div>1</div>
              <div>--</div>
              <div>2</div>
              <div>--</div>
              <div>3</div>
              <div>--</div>
              <div>4</div>
            </div>
          </section>
        </main>
    </PageLayout>
  )
}

export default IndexPage
