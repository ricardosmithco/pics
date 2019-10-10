import React from 'react';

class SearchBar extends React.Component{
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render(){
        return ( 
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value ={this.state.term} onChange={e => this.setState({ term: e.target.value }) } /> 
                </div>
            </form>
        </div>); // notice line 11: we did not put a set of parenthesis on this.onInputChange. 
        // this would automatically call that function with the render() method is called.
        // we only want the onInputChange method used as a call back when text is changed in the search bar,
        // so we leve off the parenthesis. onChange is a special method, like onClick, and onSubmit.
    }
}


export default SearchBar;