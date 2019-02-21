import React from 'react';
import styled from 'styled-components';

const FlashMessage = styled.div`
  background: ${props => props.primary ? "#d8f5d7" : "#f5dbdc"};
  color: ${props => props.primary ? "#1e7f40" : "#b2353d"};
`;
export default class Form extends React.PureComponent {

    constructor () {
      super();
      this.state = {
        fName: '',
        lName: '',
        email: '',
        birthDate: '',
        pJobTitle: '',
        yearExp: '',
        isSuccessSubmission: false,
        isHasFormRespond :false,
        respondMsg:''
      };
    }
    handleChange = (evt) => {
      // check it out: we get the evt.target.name (which will be either "fName", "lName" and so on)
      // and use it to target the key on our `state` object with the same name, using bracket syntax
      this.setState({ [evt.target.name]: evt.target.value });
    }
    
    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validateName = (name) => {
        let re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
        return re.test(String(name).toLowerCase());
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        if(this.validateEmail(this.state.email) == true){
            console.log('valid email');
            console.log(this.validateName(`${this.state.fName} ${this.state.lName}`));
            if(this.validateName(`${this.state.fName} ${this.state.lName}`) == true){
              this.onSubmitData(this.state)
            }
        } else{
            console.log('not valid');
        }
    }
    
    onSubmitData = (formData) => {
      const that = this; // I usually use redux to manage calling APIs action and saga for request handling
      fetch('https://api.dummyendpoint/me/profile ', {
        method:'PUT',
        body: formData  // or JSON.stringify(data)
        // headers
        //credentials
      })
      .then(function(data) {
        that.setState({isHasFormRespond:true, isSuccessSubmission: true, respondMsg:'Success'})
        // Here to be done when onSuccess.
        // Probably show or navigate other page.
        // can use data.json() to obtain JSON
      }).catch(function(error) {
        that.setState({isHasFormRespond:true, isSuccessSubmission:false, respondMsg:'Error'})
        // Here to be done when onError.
        // Probably you want to highlight invalid. maybe danger border colour at field not satisfy
      }); 
    }
    render () {
      const {isSuccessSubmission, isHasFormRespond, respondMsg} = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          { isHasFormRespond && <FlashMessage successness={ isSuccessSubmission}>
              {respondMsg}
            </FlashMessage>
          }
          <label>First name</label>
          <input type="text" name="fName" onChange={this.handleChange} />
          
          <label>Last name</label>
          <input type="text" name="lName" onChange={this.handleChange} />

          <label>Email</label>
          <input type="text" name="email" onChange={this.handleChange} />
          
          <label>Birth Date</label>
          <input type="text" name="birthDate" onChange={this.handleChange} />

          <label>Preferred Job Title</label>
          <input type="text" name="pJobTitle" onChange={this.handleChange} />
          
          <label>Preferred Job Title</label>
          <input type="text" name="yearExp" onChange={this.handleChange} />

          <input type="submit" value="Submit" />
        </form>
      );
    }
}