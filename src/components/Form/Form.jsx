// import { Box } from "components/box/box";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
	name: yup.string().required(),
	number: yup.number().min(3).required(),
});

const initialValues = {
	name: "",
	number: "",
};

export const PhonebookForm = ({ onSubmit }) => {
	const handleSubmit = (values, { resetForm }) => {
		onSubmit(values.name, values.number);
		resetForm();
	};
	return (
		<Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
			<Form>
				<label>
					<span>Name</span>
					<Field type="text" name="name" />
					<ErrorMessage name="name" component="div" />
				</label>
				<label>
					<span>Number</span>
					<Field type="tel" name="number" />
					<ErrorMessage name="number" component="div" />
				</label>
				<button type="submit">Add contact</button>
			</Form>
		</Formik>
	);
};

// class PhonebookForm extends Component {
// 	state = {
// 		name: "",
// 		number: "",
// 	};

// 	handleChange = e => {
// 		const { name, value } = e.currentTarget;
// 		this.setState({ [name]: value });
// 	};

// 	handleSubmit = e => {
// 		e.preventDefault();
// 		this.props.onSubmit(this.state);
// 		this.reset();
// 	};

// 	reset = () => {
// 		this.setState({ name: "", number: "" });
// 	};

// 	render() {
// 		return (
// 			<Box m={4}>
// 				<h1>Phonebook</h1>
// 				<form onSubmit={this.handleSubmit}>
// 					<label>
// 						<span>Name</span>
// 						<input
// 							type="text"
// 							value={this.state.name}
// 							onChange={this.handleChange}
// 							name="name"
// 							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// 							title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// 							required
// 						/>
// 					</label>
// 					<label>
// 						<span>Number</span>
// 						<input
// 							type="tel"
// 							value={this.state.number}
// 							onChange={this.handleChange}
// 							name="number"
// 							pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
// 							title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
// 							required
// 						/>
// 					</label>

// 					<button type="submit">Add contact</button>
// 				</form>
// 			</Box>
// 		);
// 	}
// }
