import React from 'react';

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            name:''
        }
    }

    onEmailEntry = (event)=>{
        this.setState({email: event.target.value})
    }

    onPasswordEntry = (event)=>{
        this.setState({password: event.target.value})
    }

    onNameEntry = (event)=>{
        this.setState({name: event.target.value})
    }

    //using fetch connect with backend 
    onSubmitRegister = () => {
        fetch('http://localhost:3000/register',{
            method:'post',
            headers: {'Content-Type':'application/json', 'Accepts':'application/json'},
            body: JSON.stringify({
                email:this.state.email,
                name:this.state.name,
                password:this.state.password
                
            })
        })
        .then(res => res.json())
        .then(user => {
             if(user.id){
                 this.props.loadUser(user);
                 this.props.onRouteChange('home');
             }else if(user === 'error logging in'){
                 this.props.onRouteChange('signin');
             }
        })
         
     }

    render(){
        return(
            <main className="pa4 black-80 br3 ba w-100 w-50-m w-25-l mw5 center">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        name="name"  
                        id="name"
                        onChange={this.onNameEntry}/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address"
                        onChange={this.onEmailEntry}/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password"
                        onChange={this.onPasswordEntry}/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input
                        onClick = {this.onSubmitRegister}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
                    </div>
                </div>
            </main>
    
        );
    }

    
}

export default Register;