import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component{
    renderInput(){
        return <div>I'm an input</div>;
    }
    
    render(){
        return (
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
                Stream Create
            </form>
        );
    }
};

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);