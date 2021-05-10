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
			<main className="py-4" style={{ backgroundColor: "rgb(239,240,242)" }}>
				{/* FORM CENTER */}
				<div className="grid min-h-screen place-items-center">
					<div className="w-11/12 p-12 pt-6 bg-white md:w-1/2 lg:w-5/12">
						<div id="form-step-0" style={{ minHeight: '400px' }} className={clasNames({ hidden: activeStep !== 0 })}>
							<h1 className="mb-2 text-xl font-semibold">Form Disabled</h1>
							<h2 className="mb-4 text-lg">Contact us directly to schedule</h2>

							<p><strong>Wyandot County Public Health</strong></p>
							<p>127-A South Sandusky Avenue<br />
							Upper Sandusky, Ohio 43351</p>
							<br />
							<p><strong>Monday-Friday</strong><br />
							8:30am – 4:30pm</p>
							<br />
							<p><strong>Phone:</strong> 419-294-3852</p>
						</div>		
					</div>
				</div>
			</main>
		</PageLayout>
  )
}

export default FormPage
