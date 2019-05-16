import React, { Component } from 'react';

/* Import Components */
// import CheckBox from '../components/CheckBox';
import Input from '../Components/Input';
// import TextArea from '../components/TextArea';
// import Select from '../components/Select';
// import Button from '../components/Button'
import axios from 'axios';

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

    setName = (e) => {
        this.setState({ newFriend: { ...this.state.newFriend, name: e.target.value } });
    }
    setAge = (e) => {
        this.setState({ newFriend: { ...this.state.newFriend, age: e.target.value } });
    }
    setEmail = (e) => {
        this.setState({ newFriend: { ...this.state.newFriend, email: e.target.value } });
    }

    

    /* This life cycle hook gets executed when the component mounts */

    handleFormSubmit(e) {
        // Form submission logic
        axios.post('http://localhost:5000/friends', this.state.newFriend)
        .then(res => {
            this.props.refreshData()
            console.log(res)
        }) 
        .catch(err => {
            console.log(err)
        })
        e.preventDefault();
    }
    handleClearForm(e) {
        this.setState({newFriend: {name: '', email: '', age: ''}});
        // Logic for resetting the form
        e.preventDefault();
    }
    render() {
        const { newFriend } = this.state;
        return (
            <form className="container" onSubmit={this.handleFormSubmit}>

                <input name="name" value={newFriend.name} onChange={this.setName} /> {/* Name of the user */}
                <input name="age" value={newFriend.age} onChange={this.setAge} /> {/* Input for Age */}
                <input name="email" value={newFriend.email} onChange={this.setEmail}/> {/* Input for Email */}
                <button type="submit">Submit</button> { /*Submit */}
                <button type="clear" onClick={this.handleClearForm}>Clear</button> {/* Clear the form */}
            </form>
        );
    }
}

export default Form;
