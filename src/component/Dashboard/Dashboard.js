import React, {Component} from 'react';

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            serch: '',
        }
    }

    handleSearch(e){
        console.log('clicky')
        this.setState({
            search: e.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <input placeholder='Search' onChange={e=>this.handleSearch(e)} />
                <button>Search</button>
                <button>Reset</button>
            </div>
        )
    }
}