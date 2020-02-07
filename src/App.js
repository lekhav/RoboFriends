import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield: '' 
        }
    }

    componentDidMount(){
        // fetch is a method on Window object
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length){
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                                    {/* we need to build a SearchBox component that accepts the props searchChange*/}
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobot}/>
                        </ErrorBoundary>
                    </Scroll>
                                    {/* we need to build CardList that accepts props filteredRobot & returns the filteredRobot */}
                </div>
            );
        }
    }   
}

export default App;