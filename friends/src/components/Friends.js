import React from 'react';
import AddFriend from '../components/AddFriend'
import { axiosWithAuth } from './../utils/axiosWithAuth';
import RemoveFriend from '../components/RemoveFriend'

class Friends extends React.Component {
    
    state = {
        friends: []
    };

    componentDidMount() {
        this.getFriendsData();
    }

    getFriendsData = () => {
        axiosWithAuth()

        .get('http://localhost:5000/api/friends')
        
        .then((res) => {
            console.log(res.data)
            this.setState({
                friends:res.data
            })
        })
        
        .catch((err)=>{
            console.log(err.response.data.error)
        })
      
    }
  
    addFriend = (friend) => {
        axiosWithAuth()
            .post('/friends', friend)
            .then((req) => {
                this.setState({
                    friends: req.data
                })
            })
    }


    
    render(){
        return(
            <div>

                <h1>Friends List</h1>
               
                <AddFriend addFriend={this.addFriend}/>
                <RemoveFriend/>
                
            </div>
        )
    }
}

export default Friends;