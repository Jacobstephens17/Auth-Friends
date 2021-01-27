import React from 'react';
import AddFriend from '../components/AddFriend'
import axiosWithAuth from './../utils/axiosWithAuth';
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

        .get('/friends')

        .then((req) => {
            this.setState({
                friends:req.data
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

    removeFriend = (friendId) => {
        axiosWithAuth()
        .delete(`/friends/${friendId}`)
        .then((req)=>{
            this.setState({
                friends:req.data
            })
        })

    }

    
    render(){
        return(
            <div>
                <AddFriend postFriend={this.postFriend}/>

                <h1>Friends List</h1>
               
                
            </div>
        )
    }
}

export default Friends;