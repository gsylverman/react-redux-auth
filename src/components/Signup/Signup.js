import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { authAction } from "../../actions/index";
// import { bindActionCreators } from 'redux';

class Signup extends Component {
    renderField = ({ input, type }) => {
        return (
            <input
                type={type}
                {...input}
            />
        );
    }
    getValues = (values) => {
        this.props.authentication(values);
        this.props.reset();
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.getValues)} >
                <label htmlFor="name">Email:</label><br />
                <Field
                    name="email"
                    type="text"
                    component={this.renderField}
                />
                <br />
                <label htmlFor="password">Password:</label><br />
                <Field
                    name="password"
                    type="password"
                    component={this.renderField}
                /><br />
                <div>{this.props.error}</div>
                
                <button >Login</button>
            </form>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        error: state.auth.errorMessage
        
    }

};
const mapDispatchToProps = (dispatch) => {
    // return bindActionCreators({
    //     reset: reset("signup"),
    //     authentication:authAction
    // }, dispatch);
    return {
        reset: () => dispatch(reset("signup")),
        authentication: (val) => dispatch(authAction(val))
    };
};

export default reduxForm({
    form: "signup"
})(connect(mapStateToProps, mapDispatchToProps)(Signup));