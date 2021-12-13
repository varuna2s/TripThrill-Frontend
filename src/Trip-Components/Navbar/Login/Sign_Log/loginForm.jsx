import React, { useState, useEffect ,useContext }  from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
// import "../../Footer/footer.css"

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/dashboard/');
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      email: email,
      password: password
    };

    fetch('http://127.0.0.1:8000/api/v1/users/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('http://localhost:3000/dashboard/');
        } else {
          setEmail('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
        console.log(onSubmit)
      });
  };

  return (
    <div>
    {loading === false && <p className="login-hiiden-text">TripThrill</p>}
    {errors === true && <h2>Cannot log in</h2>}
    {loading === false && (
     <BoxContainer>
       <FormContainer onSubmit={onSubmit} >
         {/* <form > */}
        <Input
        name='email'
        type='email'
        value={email}
        required
        onChange={e => setEmail(e.target.value)}
        placeholder="Email" >
          {/* <input 
           name='email'
          type='email'
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"/> */}
        </Input>
        <Input 
        name='password'
        type='password'
        value={password}
        required
        onChange={e => setPassword(e.target.value)}
        placeholder="Password" >
          {/* <input 
          name='password'
          type='password'
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          /> */}
        </Input>

        <SubmitButton type="submit" value='Sign in'>
         {/* <input type="submit" value='Login' /> */}
        </SubmitButton>
          {/* </form> */}
       </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
       {/* <SubmitButton type="submit" value='Login'>Login</SubmitButton>  */}
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
    )}
    </div>
  );
}
