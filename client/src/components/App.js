import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from '../components/Header';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header/> 
                    <Route path="/" exact component={StreamList} />
                    <Route path="/stream/new" exact component={StreamCreate} />
                    <Route path="/stream/edit" component={StreamEdit} />
                    <Route path="/stream/delete" component={StreamDelete} />
                    <Route path="/stream/show" component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;