
import React, { useContext,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle,faCheckCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import zxcvbn from 'zxcvbn';

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  
  MutedLink,
  SubmitButton,
  Validity,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import './validity.css';
import { nodeName } from "jquery";
export function SignupForm(props) {
  const [show, setShow] = useState(false);
const { switchToSignin } = useContext(AccountContext);



 //Validate

    const handleShowHide =() =>{
      setShow(!show);
      //  do something
    };

  const [ password, setPassword] = useState('');
  const testResult = zxcvbn(password);
  
const num = testResult.score * 100/4;
  
  const changePasswordColor =   () => ( {
    width : `${num}%`,
    background :  funcProgressColor(),
    height : ' 6px'
  })
  const funcProgressColor = () => {
    switch(testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
        default:
          return nodeName;
      
    }
  }
 //Validate



 

  return (
 

    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type={show ? "text" : "password"} 
        placeholder="Password" 
        onChange={ e => setPassword(e.target.value)}

        />
        {show ? (
       <FontAwesomeIcon 
       className="faEye" icon={faEye} 
         
          id="show_hide" 
          
          onClick={handleShowHide}
          />

          ) : (
            <FontAwesomeIcon 
            className="faEyeslash" icon={faEyeSlash} 
              
               id="show_hide" 
               
               onClick={handleShowHide}
               />

          )}
        {/* <Input 
        type= {show ? "text" : "password"}
        placeholder="Confirm Password" 
        onChange={handleInputChange}
        /> */}
      
        
       
           <div id="password-strength" 
            
           style={changePasswordColor()}
            >

           </div>
        
    
      <Validity id="container" >
      
       <div id="capital">
         <FontAwesomeIcon className="fa-times-circle" icon={faTimesCircle}  />
         <FontAwesomeIcon  className="fa-check-circle" icon={faCheckCircle}  />
        <span >  Capital Letters</span>
       </div>
       <div id="small">
       <FontAwesomeIcon className=" fa-times-circle" icon={faTimesCircle}  />
         <FontAwesomeIcon  className=" fa-check-circle" icon={faCheckCircle}  />
 
        <span >  Small Letters</span>
       </div>
       <div id="char">
       <FontAwesomeIcon className=" fa-times-circle" icon={faTimesCircle}  />
         <FontAwesomeIcon  className=" fa-check-circle" icon={faCheckCircle}  />
 
        <span >  Special Characters</span>
       </div>
       <div id="num">
       <FontAwesomeIcon className=" fa-times-circle" icon={faTimesCircle}  />
         <FontAwesomeIcon  className=" fa-check-circle" icon={faCheckCircle}  />
 
        <span >  Numbers</span>
       </div>
       
       <div id="more8">
       <FontAwesomeIcon className="fa-times-circle" icon={faTimesCircle}  />
         <FontAwesomeIcon  className=" fa-check-circle" icon={faCheckCircle}  />
 
        <span >  8+ Characters</span>
       </div>
        
      
       </Validity>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" disabled={true}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

