import React from 'react';



export class AddFriend extends React.Component {

    state= {
        id:'',
        name:'',
        email:''
    }

    addNewFriend = () => {
        const newFriend = {
            id:this.state.id,
            name: this.state.name, 
            email:this.state.email,
        }
        this.addNewFriend(newFriend)
    }


  handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.id,
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.email,
        })
    }




    render(){
        return(
            <div>
                <h2>Add Friend</h2>
                <form onSubmit={this.addNewFriend}>
                    <input
                        type='text'
                        name='id'
                        placeholder='Id'
                        value={this.state.id}
                        onChange={this.handleChange}
                    
                    />
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    
                    />

                      <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    
                    />
                    
                    <button>Submit New Friend</button>
                </form>
            </div>
        )
    }

}

export default AddFriend;