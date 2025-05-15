import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import logo from './assets/logo.jpg'

function Logo(props) {
  return (
    <div className="logo">
        <img src={logo}></img>
    </div>
  )
}

function Input(props) {
  return (
    <div className="input">
      <div>
        <label>
          {props.label}
        </label>
      </div>

      <div>
        <input 
          name = {props.name} 
          type = {props.type ? props.type : 'text' }
          placeholder = {props.placeholder ? props.placeholder : '' }
        />
      </div>
    </div>
  )
}

function Button(props) {
  return (
    <button className="button">
      {props.text}
    </button>
  )
}

function Footer(props) {
  return (
    <div className="footer">
      <p>
        {props.text}
        <a href={props.goto} >{props.linkText}</a>
      </p>
    </div>
  )
}

function Form(props) {
  return (
      <form className="form">
        <h1>{props.title}</h1>
        {props.elements}
        <Footer goto={props.goto} text={props.footerText} linkText={props.footerLink}/>
      </form>
  )
}

function Login() {
  return (
    <div id="login" className="container">
      <div className="half">
        <Logo />
      </div>
      <div className="half">
        <Form 
          title="Login"
          footerText="Need to create an acount?" 
          footerLink="Sign Up"
          goto="#signup"
          elements={[
            <Input name="email" label="Email" />,
            <Input name="password" type="password" label="Password" />,
            <Button text="Login" />
          ]}
        />
      </div>
    </div>
  )
}

function SignUp() {
  return (
    <div id="signup" className="container">
      <div className="half">
        <Logo />
      </div>
      <div className="half">
        <Form 
          title="Sign Up"
          footerText="Already have an acount?" 
          footerLink="Login"
          goto="#login"
          elements={[
            <Input name="name" label="Name" />,
            <Input name="email" label="Email" />,
            <Input name="password" type="password" label="Password" />,
            <Button text="Create Account"/>
          ]}
        />
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignUp/>
    <Login/>
  </StrictMode>,
)
