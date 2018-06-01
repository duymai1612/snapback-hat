import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    color: red;
`

const OptionWrapper = styled.div`
    width: 150px; 
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`

const Image = styled.img`
    width: 150px;
    height: 150px;
    display: block;
`

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count1: 0,
            count2: 0,
            count3: 0,
            justBought: false
        }
    }

    increase = (type) => {
        this.setState({ [type]: this.state[type] + 1 });
    }

    decrease = (type) => {
        if (this.state[type] > 0) {
            this.setState({ [type]: this.state[type] - 1 });
        }
    }

    submitBuy = (e) => {
        if (!this.state.justBought) {
            alert('Buy successfully');
            this.setState({ justBought: true });
        } else {
            e.preventDefault();
            alert('Please wait 3s');
        }
        setTimeout(() => {
            this.setState({ justBought: false });
        }, 3000);
    }

    render() {
        return (
            <div>
                <Title>Snapback Hat</Title>
                <OptionWrapper>
                    <Image src='./hat1.jpg' />
                    <ButtonWrapper>
                        <button onClick={() => {this.decrease('count1')}}>-</button>
                        <span> {this.state.count1} </span>
                        <button onClick={() => {this.increase('count1')}}>+</button>
                    </ButtonWrapper>
                </OptionWrapper>
                <OptionWrapper>
                    <Image src='./hat2.jpg' />
                    <ButtonWrapper>
                        <button onClick={() => {this.decrease('count2')}}>-</button>
                        <span> {this.state.count2} </span>
                        <button onClick={() => {this.increase('count2')}}>+</button>
                    </ButtonWrapper>
                </OptionWrapper>
                <OptionWrapper>
                    <Image src='./hat3.jpg' />
                    <ButtonWrapper>
                        <button onClick={() => {this.decrease('count3')}}>-</button>
                        <span> {this.state.count3} </span>
                        <button onClick={() => {this.increase('count3')}}>+</button>
                    </ButtonWrapper>
                </OptionWrapper>
                <button onClick={(e) => this.submitBuy(e)}>Buy</button>
            </div>
        );
    }
}