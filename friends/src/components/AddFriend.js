import React from 'react';



export class AddFriend extends React.Component {

    state= {
        id:'',
        name:'',
        age:'',
        email:''
    }

    addNewFriend = () => {
        const newFriend = {
            name: this.state.name, 
            age: this.state.age,
            email:this.state.email,
            id:this.state.id,
        }
        this.addNewFriend(newFriend)
    }


  handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }




    render(){
        return(
            <div>
                <h2>Add Friend</h2>
                <form onSubmit={this.addNewFriend}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    
                    />

                    <input
                        type='text'
                        name='age'
                        placeholder='Age'
                        value={this.state.age}
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