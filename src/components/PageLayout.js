import * as React from "react"
import { Link } from "gatsby"
import PublicHealthHorizontalLogo from "./../images/logo-horizontal.png";
import PublicHealthSimpleLogo from "./../images/logo-square-only.png";
import PublicHealthLogo from "./PublicHealthLogo.js";

const PageLayout = ({ children }) => {
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
        className="py-3 px-8 bg-white"
        style={{
          gridArea: 'header',
        }}
      >
        <header className="container mx-auto">
          <Link to="/" className="flex">
            <img src={PublicHealthSimpleLogo} alt="Wyandot County Public Health Logo" />
            <div className="flex flex-col brand-font ml-3 mt-2" style={{ color: '#102B60' }}>
              <span className="text-2xl font-semibold">Wyandot County</span>
              <span className="text-2xl">Public Health</span>
            </div>
          </Link>
        </header>
      </div>
      <div
        className="py-4 px-2 sm:px-8"
        style={{
          gridArea: 'nav',
          backgroundColor: '#237292',
        }}
      >
        <div className="container mx-auto text-white text-sm sm:text-base">
            <ul className="flex">
                <li className="mr-6"><Link to="/form" className="pb-1 hover:text-gray-300" activeStyle={{ borderBottom: 'white 2px solid' }}>Get Started</Link></li>
                <li className="mr-6"><Link to="/faq" className="pb-1 hover:text-gray-300" activeStyle={{ borderBottom: 'white 2px solid' }}>FAQ</Link></li>
                <li><a className="pb-1 hover:text-gray-300" href="https://wyandothealth.com">WyandotHealth.com</a></li>
            </ul>
        </div>
      </div>
      
      {/* We focus here and restrict width further */}
      <div 
        style={{
          gridArea: 'main',
        }}
      >
          {children}
      </div>
      <div 
        className="text-white p-2 sm:p-8 pt-0"
        style={{
          backgroundColor: '#237292',
          gridArea: 'footer',
        }}
      >
        <footer className="flex flex-wrap container mx-auto">
          {/* LOGO */}
          <div className="flex-grow flex-shrink p-2 sm:pr-8 mt-8" style={{ maxWidth: '320px', minWidth: '220px' }}>
            <div style={{ maxWidth: '200px' }}>
                <PublicHealthLogo />
            </div>
          </div>


          {/* CONTACT US */}
          <div className="flex flex-col flex-grow flex-shrink p-2 mt-8" style={{ minWidth: '250px' }}>
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
          <div className="w-44 flex-grow flex-shrink mt-8" style={{ minWidth: '250px' }}>
            <h4 className="text-xl mb-4">Disclaimer</h4>

            <span className="text-xs leading-tight p-2">The limited purpose for the Wyandot County Community Vaccination Portal is to provide online vaccination 
              registration, vaccination appointment scheduling, and information regarding Wyandot County Community Vaccination 
              Portal services. Wyandot County Community Vaccination Portal does not collect personal information for any purpose
              other than to serve or respond to you.
            </span>

            <p className="text-xs mt-3">
              <Link to="/privacy" className="underline">Privacy Policy</Link>
            </p>
          </div>

          {/* SOCIAL */}
        </footer>
      </div>
    </div>
  )
}

export default PageLayout
