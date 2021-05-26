// HornedBeasts

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class HornedBeasts extends React.Component {
    constructor(prpos) {
        super(prpos);
        this.state = { numer: 0 };

    }
    handelClick = () => {
        this.setState({ numer: this.state.numer + 1 })

    }

    render() {

        return (
            <>
                <Container  fluid="sm">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={this.props.imgUrl} onClick={this.handelClick} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                {this.props.description}
                            </Card.Text>
                            <Card.Text>
                            🌟
                             {this.props.numOfHorns}

                            </Card.Text>
                            <Card.Text>
                                {this.state.numer}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Container>
                {/* 
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            ✊ {this.props.numOfHorns}

                        </Card.Text>
                        <Card.Text>
                            {this.state.numer}
                        </Card.Text>
                        <Button onClick={this.handelClick} variant="primary">Click</Button>
                    </Card.Body>
                </Card> */}


                {/* <section>
                    <h2> {this.props.title} </h2>
                    <br />
                    <span> ✊ {this.props.numOfHorns}</span>
                    <img onClick={this.handelClick} src={this.props.imgUrl} alt={this.props.title} title={this.props.title} />

                    <p> {this.props.description} </p>
                    <br />
                    <p> {this.state.numer}</p>
                </section> */}
            </>
        );
    }

}

export default HornedBeasts;
