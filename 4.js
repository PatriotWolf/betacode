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

export default class Form extends React.Component {

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
    
    randomize = () => {
        let x = Math.floor((Math.random() * 6) + 0); //day start 0 - 6
        const randomOutcome = Object.keys(this.state)[x];
        console.log('day obtained,',randomOutcome)
        this.setState(prevState => {
            Object.keys(prevState).map(x=>{
                prevState[x].isBooked=false;
            })
            prevState[randomOutcome].isBooked=true;
            return (prevState)
        })
    }
    
    render () {
        const day = Object.keys(this.state);
        return (
        <div>
            <Container>
                {day.map(x=>
                    <DayContainer primary={this.state[x].isBooked}>{x}</DayContainer>
                )}
                
            </Container>
            <Button onClick={()=>{
                this.randomize();
            }}>Randomize Booking</Button> <br/>
            {JSON.stringify(this.state)}
        </div>
      );
    }
  }