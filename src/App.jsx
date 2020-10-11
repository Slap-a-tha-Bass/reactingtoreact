import React from 'react';
import ReactDOM from 'react-dom';
// props = {
// name: "Corey";
// }

class App extends React.Component {

    constructor(props) {
        super(props);
        // boiler plate to access state
        this.state = {
            text: '',
            toggle: false,
        };
    }
    inputChange = e => {
        this.setState({ text: e.target.value })
    }
    handleSubmit = () => {
        this.setState({ text: '' })
    }
    hasLoaded = () => {
        
        if (this.state.toggle) {

            this.render();

        } else { 
                const element = (
                    <>
                    <h1>LOADING ...</h1>
                    <button>Report Error</button>
                    </>
                )
                ReactDOM.render(element, document.getElementById('root'))
        }
    }
    componentDidMount() {
        this.setState({ toggle: true })
    }

    render() {

        return (
            <>
                <h1>LOL @ {this.props.name}, {this.state.toggle ? this.state.text : ''}!! </h1>
                <form>
                    <input value={this.state.text} onChange={this.inputChange} type="text" placeholder="Type Something here"  />
                    <button onClick={e => {
                        e.preventDefault();
                        this.handleSubmit();
                        this.hasLoaded();
                    }} > Submit </button>
                </form>
            </>
        );

    }



}
export default App;