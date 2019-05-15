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
                this.setState({ freinds: res.data });
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
        {this.state.friends.map(function (friends) {
          return (
            <li key={friends}>
              <h1 className="name">{friends.name}</h1>
              <h2 className="age">{friends.age}</h2>
              <h2 className="email">{friends.email}</h2>
              
            </li>
          )
        }
        )}
      </ul>
        );
    }
}

export default FriendsList;