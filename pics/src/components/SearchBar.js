import React, { Component } from 'react';

class SearchBar extends Component{

    state = { term : '' };

    onSubmitForm = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
        <div className="ui segment">
            <form onSubmit={this.onSubmitForm} className="ui form" action="">
                <div className="field">
                    <label htmlFor="">Image Search</label>
                    <input type="text" 
                        value={this.state.term}
                        onChange={(e) => this.setState({term:e.target.value})}
                    />
                </div>
            </form>
        </div>
        );
    }
}
export default SearchBar;