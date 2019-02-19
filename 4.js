import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    width: 100vw;
    justify-content: center;
`;

const DayContainer = styled.div`
    background: ${props => props.primary ? "#ff0000" : "#ffffff"};
    border: 1px solid #000;
    flex-grow:1;
    text-align:center;
`;

const Button = styled.button`
    border:1px solid #000;
    border-radius: 5px;
    background: #fff;
`;

export default class Form extends React.PureComponent {

    constructor () {
      super();
      this.state = {
        sun:{
            isBooked:true,
        },
        mon:{
            isBooked:false,
        },
        tue:{
            isBooked:false,
        },
        wed:{
            isBooked:false,
        },
        thu:{
            isBooked:false,
        },
        fri:{
            isBooked:false,
        },
        sat:{
            isBooked:false,
        },
      };
    }
    
    
    render () {
        const day = Object.keys(this.state);
        console.log(day);
      return (<div>
        <Container>
            {day.map(x=>
                <DayContainer primary={this.state[x].isBooked}>{x}</DayContainer>
            )}
            
        </Container>
        <Button onClick={()=>{
            let x = Math.floor((Math.random() * 6) + 0); //day start 0 - 6
            const randomOutcome = Object.keys(this.state)[x];

            this.setState(prevState => {
                prevState = _.mapValues(prevState, () => false);
                prevState[randomOutcome].isBooked=true;
                return ({prevState})
            })
        }}>Randomize Booking</Button> <br/>
        {JSON.stringify(this.state)}
        </div>
      );
    }
  }