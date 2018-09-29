import React, {Component} from 'react';
import ContactForm from "./ContactForm";

// This is the container for the contact page content
class ContactPage extends Component {
	render() {
		return(
			<div className="container-fluid">
				<h2>Contact Us</h2>
				<p>Do you have any questions or information you would like to share with us? Please use the form below, and we will contact
				you as soon as possible.</p>
				<ContactForm />
			</div>
		);
	}
}

export default ContactPage;
