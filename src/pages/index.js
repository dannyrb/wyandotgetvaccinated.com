import * as React from "react"

const IndexPage = () => {
  return (
    <div style={{
        minWidth: '100%',
        overflowX: 'hidden',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto',
        gridTemplateAreas: `
          'header'
          'nav'
          'main'
          'footer'
        `
      }}
    >
      <div
        className="py-1 bg-white"
        style={{
          gridArea: 'header',
        }}
      >
        <header className="container mx-auto px-8">
          <img src="https://placehold.it/200x79" />
        </header>
      </div>
      <div
        className="py-2"
        style={{
          gridArea: 'nav',
          backgroundColor: '#237292',
        }}
      >
        
      </div>
      
      {/* We focus here and restrict width further */}
      <div 
        style={{
          gridArea: 'main',
        }}
      >
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
      </div>
      <div 
        className="text-white p-8"
        style={{
          backgroundColor: '#237292',
          gridArea: 'footer',
        }}
      >
        <footer className="flex container mx-auto">
          {/* LOGO */}
          <div className="flex-grow flex-shrink" style={{ width: '200px' }}>
            <img src="https://placehold.it/200x79" />
          </div>


          {/* CONTACT US */}
          <div className="flex flex-col flex-grow flex-shrink">
            <h4 className="text-xl mb-4">Contact Us</h4>

            <div className="mb-1">
              <a href="https://www.google.com/maps/place/Wyandot+County+Health+Department/@40.8265037,-83.283019,17z/data=!3m1!4b1!4m5!3m4!1s0x88394197a1f03f97:0xf36f1d6703b96fd!8m2!3d40.8265037!4d-83.2808303">
                127-A South Sandusky Avenue<br />
                Upper Sandusky, OH 43351
              </a>
            </div>

            <div className="font-bold mb-1">
              <a href="tel:+14192943852">(419) 294-3852</a>
            </div>

            <div className="mb-1">
              <a href="https://wyandothealth.com">wyandothealth.com</a>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div className="w-44 flex-grow flex-shrink">
            <h4 className="text-xl mb-4">Disclaimer</h4>

            <span className="text-xs leading-tight">
              The limited purpose for the Wyandot County Community Vaccination Portal is to provide online vaccination 
              registration, vaccination appointment scheduling, and information regarding Wyandot County Community Vaccination 
              Portal services. Wyandot County Community Vaccination Portal does not collect personal information for any purpose
              other than to serve or respond to you.
            </span>
          </div>

          {/* SOCIAL */}
        </footer>
      </div>
    </div>
  )
}

export default IndexPage
