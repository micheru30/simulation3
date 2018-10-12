import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

function Nav(props){
    const {pathname} = props.location
    console.log(props)
    if(pathname!=='/'){
        return(
            <div>
                <h1>Nav</h1>
                <a href="http://localhost:3000/#/home"><button>Home</button></a>
                <a href="http://localhost:3000/#/new"><button>New Post</button></a>
                <a href="http://localhost:3000/#/"><button>Logout</button></a>
                <img src={props.profilePic} alt='User' />
                <p>{props.username}</p>
            </div>
        )
    } else return(null)
}

function mapStateToProps(state){
    return{
        username: state.username,
        profilePic: state.profilePic
    }
}
export default withRouter(connect(mapStateToProps)(Nav))