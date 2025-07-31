import React from 'react';
class ClassCounter extends React.Component {
    state = {
        count: 0
    };
    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count > 0 ? prevState.count - 1 : 0
        }));
    }
    render() {
        return (
            <div className="counter-box">
                <h2>Class Counter</h2>
                <h3>{this.state.count}</h3>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

export default ClassCounter;