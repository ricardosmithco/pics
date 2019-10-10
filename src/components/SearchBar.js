import React from 'react';

class SearchBar extends React.Component{
    onInputChange(event){
        console.log(event.target.value);
    }

    render(){
        return ( 
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <input type="text" onChange={this.onInputChange}/> 
                </div>
            </form>
        </div>); // notice line 11: we did not put a set of parenthesis on this.onInputChange. 
        // this would automatically call that function with the render() method is called.
        // we only want the onInputChange method used as a call back when text is changed in the search bar,
        // so we leve off the parenthesis. onChange is a special method, like onClick, and onSubmit.
    }
}


export default SearchBar;