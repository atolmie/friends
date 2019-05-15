import React, { Component } from 'react';

/* Import Components */
// import CheckBox from '../components/CheckBox';
import Input from '../Components/Input';
// import TextArea from '../components/TextArea';
// import Select from '../components/Select';
// import Button from '../components/Button'

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newFriend: {
                name: '',
                email: '',
                age: ''
            }
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }

    /* This life cycle hook gets executed when the component mounts */

    handleFormSubmit(e) {
        console.warn(e.target.name.value);
        console.warn(e.target.age.value);
        console.warn(e.target.email.value);
        e.preventDefault();
        // Form submission logic
    }
    handleClearForm() {
        // Logic for resetting the form
    }
    render() {
        return (
            <form className="container" onSubmit={this.handleFormSubmit}>

                <input type="text" name="name"/> {/* Name of the user */}
                <input name="age"/> {/* Input for Age */}
                <input name="email"/> {/* Input for Age */}
                <button type="submit">Submit</button> { /*Submit */}
                <button type="clear">Clear</button> {/* Clear the form */}
            </form>
        );
    }
}

export default Form;
