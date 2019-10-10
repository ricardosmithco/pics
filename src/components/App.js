import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import { throwStatement } from '@babel/types';


class App extends React.Component {
    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos/', {
            params: {query: term},
            headers: {Authorization: 'Client-ID 7f36325a9bce5467371cae58a4faaa7442d904ea4b84e0495b2339386b5b4e2a'}
        }); 
    }

    render(){
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>
        );
    }
}

export default App;