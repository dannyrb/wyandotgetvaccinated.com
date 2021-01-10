import * as React from "react"
import { navigate, Link } from 'gatsby';
import clasNames from "classnames"
import PageLayout from "./../components/PageLayout.js";
import StepDots from "./../components/StepDots.js";
import CustomDateInput from './../components/CustomDateInput.js';

// https://allvax.lakecohealth.org/s/notice-of-privacy?language=en_US

const healthConditions = [
	{ name: 'cancer', value: 'true', label: 'Cancer' },
	{ name: 'copd', value: 'true', label: 'COPD' },
	{ name: 'chronickidneydisease', value: 'true', label: 'Chronic Kidney Disease' },
	{ name: 'immunocompromised', value: 'true', label: 'Immunocompromised State' },
	{ name: 'obesity', value: 'true', label: 'Obesity (BMI 30+)' },
	{ name: 'heartconditions', value: 'true', label: 'Serious Heart Conditions (Heart Failure, Coronary Artery Disease or Cardiomyopathy)' },
	{ name: 'sicklecell', value: 'true', label: 'Sickle Cell Disease' },
	{ name: 'type2diabetes', value: 'true', label: 'Diabetes' },
	{ name: 'pregnant', value: 'true', label: 'Pregnant' },
	{ name: 'pulmonarydisease', value: 'true', label: 'Obstructive Pulmonary Disease' },
	{ name: 'smoker', value: 'true', label: 'Smoker' },
	{ name: 'none', value: 'true', label: 'None' },
];

const _encode = (data) => {
	return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
}

const FormPage = () => {
	const maxStep = 2;
	const [activeStep, setActiveStep] = React.useState(0);

	function validityChecker () {
		const inputs = document.querySelectorAll('input');
		let formIsInvalid = false;

		inputs.forEach(input => {
			if(!input.validity.valid) {
				formIsInvalid = true;
			}
		});

		if(formIsInvalid) {
			window.alert('Firstname, lastname, birth date, and zip code are required fields to advance.');
		}

		return formIsInvalid;
	}

	function nextStep(event) {
		if(event) {
			event.preventDefault();
		}

		if(activeStep === 0) {
			const formIsInvalid = validityChecker();

			if(formIsInvalid) {
				return;
			}
		}

		const step = activeStep + 1 > maxStep
			? maxStep
			: activeStep + 1;

		setActiveStep(step);
		window.scrollTo(0, 0);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
	
		const form = event.target;
		const formValues = Object.values(form).reduce((obj, field) => { 
			const isCheckbox = field.hasOwnProperty('checked');
			
			if(isCheckbox){
				obj[field.name] = field.checked;
			} else {
				obj[field.name] = field.value;
			}

			return obj;
		}, {});
		
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
		.catch(error => alert('Form was not able to submit successfully. Please try calling Wyandot Public Health directly.'))
	}

  return (
		<PageLayout>
			<main className="py-16" style={{ backgroundColor: "rgb(239,240,242)" }}>
				{/* FORM CENTER */}
				<div className="grid min-h-screen place-items-center">
					<div className="w-11/12 p-12 pt-6 bg-white md:w-1/2 lg:w-5/12">

						<StepDots activeStep={activeStep} />

						<form method="post" netlify-honeypot="email" data-netlify="true" name="registration" onSubmit={handleSubmit}>

							<div id="form-step-0" className={clasNames({ hidden: activeStep !== 0 })}>

								<h1 className="mb-2 text-xl font-semibold">Enter contact information</h1>
								<h2 className="mb-4 text-lg">Your information</h2>

								<input type="hidden" name="email" />
								<input type="hidden" name="form-name" value="registration" />

								<div className="flex justify-between gap-3">
									<span className="w-1/2">
										<label htmlFor="firstname" className="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
										<input id="firstname" type="text" name="firstname" placeholder="Jane" autoComplete="given-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
									</span>
									<span className="w-1/2">
										<label htmlFor="lastname" className="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
										<input id="lastname" type="text" name="lastname" placeholder="Doe" autoComplete="family-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
									</span>
								</div>

								<label htmlFor="emailaddress" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
								<input id="emailaddress" type="email" name="emailaddress" placeholder="john.doe@company.com" autoComplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
						
								<label htmlFor="phone" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Phone Number</label>
								<input id="phone" type="text" name="phone" placeholder="(555) 555-5555" autoComplete="phone" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />

								<div className="flex flex-col mt-6">
									<label className="inline-flex items-center">
										<input type="checkbox" name="cantext" value="true" className="w-5 h-5 text-blue-600 form-checkbox" />
											<span className="ml-2 text-xs text-gray-700">Is this number SMS enabled? May we text it?</span>
									</label>
									<label className="inline-flex items-center mt-2 mb-2">
										<input type="checkbox" name="cancall" value="true" className="w-5 h-5 text-blue-600 form-checkbox" />
											<span className="ml-2 text-xs text-gray-700">May we call this number to reach you?</span>
									</label>
								</div>

								<label htmlFor="sex" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Sex</label>
								<select id="sex" name="sex" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner">
									<option label="Please select" value="PleaseSelect">Please select</option>
									<option label="Male" value="Male">Male</option>
									<option label="Female" value="Female">Female</option>
									<option label="Transgender" value="Transgender">Transgender</option>
									<option label="Decline to respond" value="Decline">Decline to respond</option>
								</select>

								<label htmlFor="dateofbirth" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Date of Birth (MM/DD/YYYY)</label>
								<CustomDateInput name="dateofbirth" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

								<label htmlFor="zip" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Your ZIP Code</label>
								<input id="zip" type="text" name="zip" placeholder="43210" autoComplete="zip" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

								<div className="flex flex-col mt-6">
									<label className="inline-flex items-center">
										<input type="checkbox" name="current patient" value="true" className="w-5 h-5 text-blue-600 form-checkbox" />
											<span className="ml-2 text-xs text-gray-700">Are you a patient of the Wyandot County Health Department and Community Health Center?</span>
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

								<h1 className="mb-2 text-xl font-semibold">Answer screening questions</h1>
								<h2 className="mb-6 text-lg">Risk factor screening questions</h2>
								<p className="mb-6 text-sm">Please answer these questions the best you can to determine when you can get the vaccine.</p>

								<label htmlFor="live" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Do you live in any of the following?</label>
								<select id="live" name="live" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner">
									<option label="Please select" value="Not Selected">Please select</option>
									<option label="Halfway House, Homeless Shelter, Correctional Facility, or Detention Center" value="Halfway">Halfway House, Homeless Shelter, Correctional Facility, or Detention Center</option>
									<option label="Long-Term Care Facility, Assisted Living, or Nursing Home" value="Long-Term">Long-Term Care Facility, Assisted Living, or Nursing Home</option>
									<option label="Other congregate living situation" value="Other Congregate">Other congregate living situation</option>
									<option label="None of the above" value="None">None of the above</option>
                </select>

								<label htmlFor="work" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Do you work for any of the following?</label>
								<select id="work" name="work" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner">
									<option label="Please select" value="Not Selected">Please select</option>
									<option label="EMS" value="EMS">EMS</option>
									<option label="Healthcare Facility (Doctor, Nurse, Public health worker)" value="Healthcare Facility">Healthcare Facility (Doctor, Nurse, Public health worker)</option>
									<option label="School Staff" value="School Staff">School Staff</option>
									<option label="Essential Frontline Worker: Food &amp; Agriculture (processing plants), Utilities, Transportation (transit and trucking), Corrections Officer" value="Essential Frontline Worker">Essential Frontline Worker: Food &amp; Agriculture (processing plants), Utilities, Transportation (transit and trucking), Corrections Officer</option>
									<option label="Fire Department" value="Fire Department">Fire Department</option>
									<option label="None of the Above" value="None">None of the Above</option>
                </select>

								<h2 className="mt-8 mb-4 font-semibold underline">Do you have any of the following health conditions? (Select all that apply)</h2>

								<div className="flex flex-col mt-6">
									{healthConditions.map(condition => (
										<div key={condition.name} className="flex flex-col mt-1">
											<label className="inline-flex items-center">
												<input type="checkbox" name={condition.name} value={condition.value} className="w-5 h-5 text-blue-600 form-checkbox" />
													<span className="ml-2 text-xs text-gray-700">{condition.label}</span>
											</label>
										</div>
									))}
								</div>

								<div data-netlify-recaptcha="true"></div>
		
								<button 
									type="submit"
									className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
								>
										Submit
								</button>
							</div>

							<div id="form-step-2" className={clasNames({ hidden: activeStep !== 2 })}>
								<h1 className="mb-2 text-xl font-semibold">Done registering</h1>
								<h2 className="mb-6 text-lg">Thank you for registering your information.</h2>

								<p className="mb-2 underline">There is no need to call to verify that this form was submitted successfully.</p>

								<p className="mb-6">
									We’ll contact the email address or phone number provided as soon as you’re able to schedule a vaccine
									with a provider near you!<br /><br />We prioritize vaccinations per Ohio and CDC guidelines. To learn more about
									our current criteria/phase, you can monitor our 
									<a target="_blank" className="text-blue-600 underline hover:text-blue-300" href="https://www.wyandothealth.com/category/news/"> news feed</a> or 
									<a target="_blank" className="text-blue-600 underline hover:text-blue-300" href="https://www.facebook.com/wyandotcountypublichealth"> Facebook page</a>.
								</p>

								<Link to="/faq" className="my-2 text-blue-600 underline hover:text-blue-300">Questions? Read our FAQ</Link>
								<Link to="/" className="flex justify-between mt-4 text-gray-600 underline cursor-pointer hover:text-black">
									Register another person
								</Link>
							</div>
						</form>
					</div>
				</div>
			</main>
		</PageLayout>
  )
}

export default FormPage
