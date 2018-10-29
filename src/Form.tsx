import * as React from 'react';
import './App.css';
import exclamation from './exclamation.svg';


interface State {
    password: string
    email: string
    submitted: boolean
}


 class Form extends React.Component <{}, State> {
    state = {
        password:  '',
        email: '',
        submitted: false,
    }

    get isEmailInvalid(): boolean {
        return this.state.submitted && !/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/.test(this.state.email);
    }

    get isPasswordInvalid(): boolean {
        return this.state.submitted && !(this.state.password.length > 5)
    } 

    handleEmailChange = (event:any) => {
        this.setState({email: event.target.value})
    }

    handlePasswordChage = ( event:any ) => {
       this.setState({ password: event.target.value})
    }


    handleClick = (event:any) => {
        event.persist()
        this.setState(
            {
                submitted: true,
            },
            () => {
                const { isPasswordInvalid, isEmailInvalid } = this
                if (isEmailInvalid || isPasswordInvalid) {
                    event.preventDefault(); 
                }
            },
        );
    }

    public render(){
        return(
            <form>
                <div className='input-container'>
                    <input
                        className="email-input"
                        name="email"
                        type='email'
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />                
                    {this.isEmailInvalid && (
                        <div className='error-row' >
                            <img src={exclamation}/> 
                            <p className='error-text'>Incorrect email</p> 
                        </div>
                    )}
                </div>
                <div className='input-container'>
                    <input
                        className="password-input"
                        name="password"
                        type='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handlePasswordChage}
                    />
                    {this.isPasswordInvalid && (
                        <div className='error-row' >
                            <img src={exclamation}/> 
                            <p className='error-text'>Type more than 6 character</p> 
                        </div>
                    )}
                </div>
                <input 
                    className="submit-btn"
                    type="submit"
                    value="Let me in"
                    onClick={this.handleClick}
                />
            </form>
        );
    }
}

export default Form;