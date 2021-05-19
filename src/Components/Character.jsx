import React from "react";

export default function Character({character}) {
    return (
        <div className="character">
                 <div className="container">
                    <h2>{character.name}</h2>
                    <div className='info'>
                        <span>Status: {character.status}</span>
                        <span>Species:{character.species}</span>
                        <span>Gender: {character.gender}</span>
                        {/* <span>Origin:{character.origin.name}</span>
                        <span>Location:{character.location.name}</span>
                        <span>Picture:{character.image}</span> */}
                    </div>
            </div> 
        </div>
    )
} 

/* class Ciudad extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            character:{}
        }
    }
    componentDidMount(){

    }
    
    render(){
        return (
            <div className='character'>
                <h2>{this.props.name}</h2>
                <div className='info'>
                    <span>Status: {this.props.status}</span>
                    <span>Species:{this.props.species}</span>
                    <span>Gender: {this.props.gender}</span>
                    <span>Origin:{this.props.origin.name}</span>
                    <span>Location:{this.props.location.name}</span>
                    <span>Picture:{this.props.image}</span>
                </div>
            </div>
        )
    }
} */

