
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import LoginForm from '../Forms/loginForm.js'
// import SignupForm from '../Forms/signUp.js'
import { Form, FormGroup, Label, Input } from 'reactstrap';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import User from '../../../utils/user'
import HeaderBar from '../header'
//parent component
//keeps track of state, defines functionality to be passed into child component
//handle state change function
//click events on button,, function. handlesubmit handle login. 
// let loggedIn = false;
// let user = 'user';

class Login extends Component {
    constructor(props) {
        super(props);
        //initializing components
        this.state = {
            userName: '',
            userEmail: '',
            userPassword: '',
            isAdmin: false,
            showLoginModal: true,
            loggedIn: this.props.updateLoginStatus,
            validation: ''
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.toggleShowModal = this.toggleShowModal.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }
    componentWillReceiveProps(){
     this.setState({modal: true})
    }
    componentDidMount(){
     this.setState({modal: true})
    }

    // LOGIN FUNCTIONS
    handleLogin = event => {
        event.preventDefault()

        if (this.state.userEmail === '') {
            //change placeholder
            //change style border to red
            alert('stoopid')
            return false
        }

        if (this.state.userPassword === '') {
            //change placeholder
            //change style border to red
            alert('stoopidPassword')
            return false
        }

        let loginObj = {
            email: this.state.userEmail,
            password: this.state.userPassword
        }
        //make axios call to api-- 
        User.findOne(loginObj)
        .then(({data}) => {
            if (data === 'Invalid credentials') {
                this.setState({validation: data})
            } else {
                //store token in local storage. when post submitted  inclued token in axios call header. 
                localStorage.setItem('userId',data)
                this.props.updateLoginStatus(true)
            }
        })
        .catch(e => console.log(e))

    }

    // give value to input thru state change.
    handleLoginInput = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }

    // SIGN UP OPTIONS

    handleSignInput = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }

    handleSignUp = e => {
        e.preventDefault()

        if (this.state.userName == '') {
            //placeholder change and border style
            alert('need username')
            return false
        }

        if (this.state.userEmail < 5 || !this.state.userEmail.includes('@') || !this.state.userEmail.includes('.')) {
            //placeholder change and border style
            alert('need valid email address')
            return false
        }

        if (this.state.userPassword == '') {
            //placeholder change and border style
            alert('need password')
            return false
        }

        let email = this.state.userEmail
        console.log(email)
        // need to check if email already exist before posting user but routes break 
        // need to make sure form is filled out and must be email address
        // User.findAnother(email)
        // .then(({data}) => {
        //     console.log(data)
        //     .catch(e => console.log(e))
        // })
        let signUpObj = {
            username: this.state.userName,
            email: this.state.userEmail,
            password: this.state.userPassword
        }
        console.log(signUpObj)
        User.postOne(signUpObj)
        .catch(e => console.log(e))
        this.setState({
            showLoginModal: !this.state.showLoginModal,
            validation: ''
        })
        //once the user is successfully signed up call a function that is from the Home component to update the status of isLoggedIn
        //ex this.props.updateLoginStatus()
    }




    // toggle() {
    //     this.setState(prevState => ({
    //         modal: !prevState.modal
    //     }));
    // }

    //this function toggles whether the modal is shown or not
    toggleShowModal() {
        this.setState({
            modal: !this.state.modal,
            showLoginModal: true
        });
    }
    //this function updates the state for whether to show the login modal or not
    toggleForm() {
        this.setState({
            showLoginModal: !this.state.showLoginModal,
            validation: ''
        })
    }
    //initial log in button handler
    handleLoginClick() {
        this.toggleForm()
        this.toggleShowModal()
    }

    //this function toggles which form to show based on state
    showTheModal = () => {
        if (this.state.modal) {
            if (this.state.showLoginModal == true) {
                //Login Form
                return (
                    <div>
                        <Form>
                            {/* name */}
                            <FormGroup>
                                <Label htmlFor='userEmail'>Email</Label>
                                <Input type="email" name="userEmail" id="useremail" className="loginInput" placeholder="Email" onChange={this.handleLoginInput} />
                            </FormGroup>
                            {/* password */}
                            <FormGroup>
                                <Label htmlFor="userPassword">Password</Label>
                                <Input type="password" name="userPassword" id="userPassword" className="loginInput" placeholder="Password" onChange={this.handleLoginInput} />
                            </FormGroup>
                            {this.state.validation}
                        </Form>
                        <br />
                        <small>Not a member?</small>
                        <br />
                        {/* SIGN UP BUTTON b4 the login bc modal*/}
                        <Button outline color="success" onClick={this.toggleForm}>Sign Up</Button>
                    </div>
                )
            } else {
                //show sign up form
                return (
                    <div>
                        <Form>
                            <FormGroup>
                                <Label htmlFor='userName'>Name</Label>
                                <Input type="text" name="userName" id="userName" onChange={this.handleSignInput} placeholder="Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="userEmail">Email</Label>
                                <Input type="email" name="userEmail" id="userEmail" onChange={this.handleSignInput} placeholder="Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="userPassword">Password</Label>
                                <Input type="password" name="userPassword" id="userPassword" onChange={this.handleSignInput} placeholder="Password" />
                            </FormGroup>
                        </Form>
                        <br />
                        <small>Have an acount?</small>
                        <br />
                        <Button outline color="success" onClick={this.toggleForm}>Log In</Button>
                    </div>
                )
            }
        }

    }
    // modalshowing = _ => {
    //     this.setState({
    //         modal: true
    //     })
    //     console.log(this.state.modal)
    // }


    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleShowModal}>{this.state.showLoginModal ? "Log In" : "Sign Up"}</ModalHeader>
                    <ModalBody>
                        {this.showTheModal()}
                    </ModalBody>
                    <ModalFooter>
                        <Button outline color="secondary" onClick={this.state.showLoginModal ? this.handleLogin : this.handleSignUp}>{this.state.showLoginModal ? "Log In" : "Submit"}</Button>{' '}
                        <Button color="secondary" onClick={this.toggleShowModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}


export default Login


//this.state.showLoginModal ? this.handleLogin : this.handleSignUp}>{this.state.showLoginModal ? "Log In" : "Submit"