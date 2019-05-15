import React from 'react';
import axios from "axios";

class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            message: ''
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/friends")
            .then(res => {
                console.log(res.data);
                console.log('change');
                this.setState({ freinds: res.data });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    message: "Data fetching failed!"
                });
            });
    }

    render() {
        return null;
    }
}

export default FriendsList;