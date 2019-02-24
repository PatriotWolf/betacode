import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;
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

const Row = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: auto auto auto auto auto auto auto;
    border: 1px solid rgba(0, 0, 0, 0.8);
    div {
        
        border: 1px solid rgba(0, 0, 0, 0.8);
        font-size: 30px;
        text-align: center;
    }
`;

export default class Form extends React.Component {
    date = new Date()
    days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
    constructor () {
      super(); 
      const lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
      const firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);

      this.state = {
          lastDay,
          firstDay,
          randomDate: 1,
      }
    }
    
    onFirstWeek = (date) => {
        return new Array(date.getDay()-1).fill('');
    }

    randomizer = () => {
        const  min = Math.ceil(this.state.firstDay.getDate());
        const max = Math.floor(this.state.lastDay.getDate());
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        this.setState({randomDate:random})
    }
    render () {
        const firstWeek = this.onFirstWeek(this.state.firstDay);
        const date = new Array(this.state.lastDay.getDate()).fill('');
        return (
        <div>
            <Container>
               <Row>
                    {this.days.map(x => <div>{x}</div>)}
                    {firstWeek.map(x=><div>{x}</div>)}
                    {date.map((x,index)=><DayContainer primary={(index==this.state.randomDate-1)}>{index+1}</DayContainer>)}
               </Row>
            </Container>
            <Button onClick={()=>{
                this.randomizer()
            }}>Randomize Booking</Button> <br/>
            {JSON.stringify(this.state)}
        </div>
      );
    }
  }