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
                this.setState({ friends: res.data });
            })
            .catch(err => {
                this.setState({
                    message: "Data fetching failed!"
                });
            });
    }

    render() {
        return (
            <ul>
                {this.state.friends.map(friend => {
                    return (
                        <li key={friend}>
                            <h1 className="name">{friend.name}</h1>
                            <h2 className="age">{friend.age}</h2>
                            <h2 className="email">{friend.email}</h2>
                        </li>
                    )
                }
                )}
            </ul>
        );
    }
}

export default FriendsList;