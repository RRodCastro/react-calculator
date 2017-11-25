import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
 
export default class Calculator extends React.Component {
    constructor() {
        super();
		this.state = {
			operations: [],	
		};
		this.handleClick = this.handleClick.bind(this);
		this.renderDisplay = this.renderDisplay.bind(this);
		this.renderButtons = this.renderButtons.bind(this);
    }
	handleClick(e) {
		let charOp;
		let operator;
		if (e.target.id !== 'ac' && e.target.id !== 'remove') {
			operator = [...this.state.operations, (e.target.id).toString()];
		}
		if (e.target.id === 'ac') {
			operator = [];
			this.setState({ operations: operator });
		}
		if (e.target.id === 'remove') {
		console.log(operator);
			operator = [...this.state.operations];
			operator.pop();
			this.setState({ operations: operator });
		}
		if (e.target.id !== '=') {
			this.setState({ operations: operator });
		}
		let op1;
		let op2;
		const operations = [];
		if (e.target.id === '=') {
			if (operator.indexOf('+') > -1) {
					charOp = '+';
			} else if (operator.indexOf('-') > -1) {
				charOp = '-';
			} else if (operator.indexOf('x') > -1) {
				charOp = 'x';
			} else if (operator.indexOf('÷') > -1) {
				charOp = '÷';
			}
			op1 = parseFloat(operator.slice(0, operator.indexOf(charOp)).join(''));
			op2 = parseFloat(operator.slice(operator.indexOf(charOp) + 1, operator.length - 1).join(''));
			switch (charOp) {
				case '+': {
					operations.push(op1 + op2);
					this.setState({ operations });
					break;
				}
				case '-': {
					operations.push(op1 - op2);
					this.setState({ operations });
					break;
				}
				case 'x': {
					operations.push(op1 * op2);
					this.setState({ operations });
					break;
				}
				case '÷': {
					let tempOp = (op1 / op2).toFixed(2);
					if (tempOp.includes('.00')) {
						tempOp = (op1 / op2);
					}
					operations.push(tempOp);
					this.setState({ operations });
					break;
				}
				default: {
					operations.push(0);
					this.setState({ operations });
					break;
				}
			}
		}
	}
	renderDisplay() {
		return (
				<div style={{ height: '50px' }}>
				{this.state.operations[0] > 999999999 ? 
				<h3> Error </h3> :
				<h3> {this.state.operations} </h3>}
				</div>
		);
	}
	renderButtons() {
	return (
			<div style={{ padding: '50px' }}>
			{this.renderDisplay()}
				<div>
					<Button bsStyle="danger" style={{ width: '50px' }}id="ac" onClick={this.handleClick}>
						AC
					</Button>
					
					<Button bsStyle="danger" style={{ width: '50px' }} id="remove" onClick={this.handleClick}>
						←
					</Button>
					<Button bsStyle="info" id="÷" onClick={this.handleClick}>
						÷
					</Button>
				</div>
				<div>
					<Button bsStyle="primary" id="7" onClick={this.handleClick}>
						7
					</Button>
					<Button bsStyle="primary" id="8" onClick={this.handleClick}>
						8
					</Button>
					<Button bsStyle="primary" id="9" onClick={this.handleClick}>
						9
					</Button>
					<Button bsStyle="info" id="x" onClick={this.handleClick}>
						x
					</Button>
				</div>
				<div >
					<Button bsStyle="primary" id="4" onClick={this.handleClick}>
						4
					</Button>
					<Button bsStyle="primary" id="5" onClick={this.handleClick}>
						5
					</Button>
					<Button bsStyle="primary" id="6" onClick={this.handleClick}>
						6
					</Button>
					<Button bsStyle="info" style={{ width: '33px' }}id="-" onClick={this.handleClick}>
						-
					</Button>
				</div>
				<div>
					<Button bsStyle="primary" id="1" onClick={this.handleClick}>
						1
					</Button>
					<Button bsStyle="primary" id="2" onClick={this.handleClick}>
						2
					</Button>
					<Button bsStyle="primary" id="3" onClick={this.handleClick}>
						3
					</Button>
					
					<Button style={{ width: '33px' }} bsStyle="info" id="+" onClick={this.handleClick}>
						+
					</Button>
				</div>
				<div>
						<Button bsStyle="primary" style={{ width: '50px' }} id="0" onClick={this.handleClick}>
							0
						</Button>
						<Button bsStyle="primary" style={{ width: '50px' }} id="." onClick={this.handleClick}>
							.
						</Button>
						<Button style={{ width: '35px' }} bsStyle="info" id="=" onClick={this.handleClick}>
							=
						</Button>
				</div>
			</div>	
        );
	}
	
    render() {
		return (<div style={{ textAlign: 'center' }}> {this.renderButtons()} </div>);
	}
 }

