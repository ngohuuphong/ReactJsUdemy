import React, { Component } from 'react';

class SearchBar extends Component{

    state = {
        term: ''
    };

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onSubmitForm(this.state.term);
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onSubmitForm} className="ui form" action="">
                    <div className="field">
                        <label htmlFor="">Video SearchBar</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;