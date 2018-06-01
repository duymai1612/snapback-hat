import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    color: red;
`

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Title>Test page</Title>
            </div>
        );
    }
}