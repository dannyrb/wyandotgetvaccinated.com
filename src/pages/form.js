import * as React from "react"
import { navigate } from 'gatsby';
import clasNames from "classnames"
import PageLayout from "./../components/PageLayout.js";
import StepDots from "./../components/StepDots.js";

// https://allvax.lakecohealth.org/s/notice-of-privacy?language=en_US

const healthConditions = [
	{ name: '', label: 'Cancer' },
	{ name: '', label: 'COPD' },
	{ name: '', label: 'Chronic Kidney Disease' },
	{ name: '', label: 'Immunocompromised State from Solid Organ Transplant' },
	{ name: '', label: 'Obesity (BMI 30+)' },
	{ name: '', label: 'Serious Heart Conditions (Heart Failure, Coronary Artery Disease or Cardiomyopathy)' },
	{ name: '', label: 'Sickle Cell Disease' },
	{ name: '', label: 'Type 2 Diabetes Mellitus' },
	{ name: '', label: 'Pregnant' },
	{ name: '', label: 'Obstructive Pulmonary Disease' },
	{ name: '', label: 'Smoker' },
	{ name: '', label: 'None' },
];

const _encode = (data) => {
	return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
}

const FormPage = () => {
	const maxStep = 2;
	const [activeStep, setActiveStep] = React.useState(0);

	function nextStep(event) {
		console.log(event);
		event.preventDefault();

		const step = activeStep + 1 > maxStep
			? maxStep
			: activeStep + 1;

		setActiveStep(step);
		window.scrollTo(0, 0);
	}
	
	function previousStep(event) {
		event.preventDefault();

		const step = activeStep - 1 < 0
		? 0
		: activeStep - 1;

		setActiveStep(step);
		window.scrollTo(0, 0);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		

		console.log('event target: ', event.target);

		const form = event.target;
		const formValues = Object.values(form).reduce((obj,field) => { obj[field.name] = field.value; return obj }, {});

		console.log(formValues);
		
		// This POSTs to Netlify. We can POST to any route, and netlify will pick it up
		// as a form submission
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: _encode({
				"form-name": event.target.getAttribute("name"),
				...formValues
			})
		})
		.then(() => nextStep())
		.catch(error => alert(error))
	}

  return (
		<PageLayout>
			<main className="py-16" style={{ backgroundColor: "rgb(239,240,242)" }}>
				{/* FORM CENTER */}
				<div className="grid min-h-screen place-items-center">
					<div className="w-11/12 p-12 pt-6 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">

						<StepDots activeStep={activeStep} />

						<form method="post" netlify-honeypot="email" data-netlify="true" name="registration" onSubmit={handleSubmit}>

							<div id="form-step-0" className={clasNames({ hidden: activeStep !== 0 })}>

								<h1 className="text-xl font-semibold mb-2">Enter contact information</h1>
								<h2 className="text-lg mb-4">Your information</h2>

								<input type="hidden" name="email" />
								<input type="hidden" name="form-name" value="registration" />

								<div className="flex justify-between gap-3">
									<span className="w-1/2">
										<label for="firstname" className="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
										<input id="firstname" type="text" name="firstname" placeholder="Jane" autocomplete="given-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
									</span>
									<span className="w-1/2">
										<label for="lastname" className="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
										<input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
									</span>
								</div>

								<label for="emailaddress" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
								<input id="emailaddress" type="email" name="emailaddress" placeholder="john.doe@company.com" autocomplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
						
								<label for="phone" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Phone Number</label>
								<input id="phone" type="text" name="phone" placeholder="(555) 555-5555" autocomplete="phone" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

								<label for="sex" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Sex</label>
								<select id="sex" name="sex" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Transgender</option>
                  <option>Decline to respond</option>
                </select>

								<label for="dateofbirth" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Date of Birth (MM/DD/YYYY)</label>
								<input type="date" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

								<label for="zip" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Your ZIP Code</label>
								<input id="zip" type="text" name="zip" placeholder="43210" autocomplete="zip" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

								<div class="flex flex-col mt-6">
									<label class="inline-flex items-center">
										<input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
											<span class="text-xs ml-2 text-gray-700">Are you a patient of the Wyandot County Health Department and Community Health Center?</span>
									</label>
								</div>
		
								<button 
									className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
									onClick={nextStep}
								>
										Next
								</button>
							</div>
						
							<div id="form-step-1" className={clasNames({ hidden: activeStep !== 1 })}>

								<h1 className="text-xl font-semibold mb-2">Answer screening questions</h1>
								<h2 className="text-lg mb-6">Risk factor screening questions</h2>
								<p className="text-sm mb-6">Please answer these questions the best you can to determine when you can get the vaccine.</p>

								<label for="live" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Do you live in any of the following?</label>
								<select id="live" name="live" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required>
									<option label="Please select" value="PleaseSelect">Please select</option>
									<option label="Halfway House, Homeless Shelter, Correctional Facility, or Detention Center" value="pcHalfway">Halfway House, Homeless Shelter, Correctional Facility, or Detention Center</option>
									<option label="Long-Term Care Facility, Assisted Living, or Nursing Home" value="pcLongterm">Long-Term Care Facility, Assisted Living, or Nursing Home</option>
									<option label="Other congregate living situation" value="pcOtherCongregate">Other congregate living situation</option>
									<option label="None of the above" value="pcNone">None of the above</option>
                </select>

								<label for="work" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Do you work for any of the following?</label>
								<select id="work" name="work" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required>
									<option label="Please select" value="PleaseSelect">Please select</option>
									<option label="EMS" value="pcEssentialWorkerEMS">EMS</option>
									<option label="Healtchare Facility (Doctor, Nurse, Public health worker)" value="pcHealthcareFacility">Healthcare Facility (Doctor, Nurse, Public health worker)</option>
									<option label="School Staff" value="pcSchoolStaff">School Staff</option>
									<option label="Essential Frontline Worker: Food &amp; Agriculture (processing plants), Utilities, Transportation (transit and trucking), Corrections Officer" value="pcEssentialWorkerOther">Essential Frontline Worker: Food &amp; Agriculture (processing plants), Utilities, Transportation (transit and trucking), Corrections Officer</option>
									<option label="Fire Department" value="pcEssentialWorkerFire_Department">Fire Department</option>
									<option label="None of the Above" value="pcEssentialWorkerNone">None of the Above</option>
                </select>

								<h2 className="font-semibold underline mt-8 mb-4">Do you have any of the following health conditions? (Select all that apply)</h2>

								<div className="flex flex-col mt-6">
									{healthConditions.map(condition => (
										<div className="flex flex-col mt-1">
											<label className="inline-flex items-center">
												<input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
													<span className="text-xs ml-2 text-gray-700">{condition.label}</span>
											</label>
										</div>
									))}
								</div>

								<div data-netlify-recaptcha="true"></div>
		
								<button 
									type="submit"
									className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
									onClick={nextStep}
								>
										Submit
								</button>
							</div>

							<div id="form-step-2" className={clasNames({ hidden: activeStep !== 2 })}>
								<h1>Done registering</h1>
								<h2>Thank you for registering your information.</h2>

								<p>There are currently no time slots available to schedule a vaccine.</p>
								<p>We’ll contact the email address provided as soon as you’re able to schedule a vaccine with a provider near you!</p>

								<a href="#">Questions?</a>
								<p className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Register another person</p>
							</div>
						</form>
					</div>
				</div>
			</main>
		</PageLayout>
  )
}

export default FormPage
