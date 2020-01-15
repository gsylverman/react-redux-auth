import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {

    class ComposeComp extends Component {
        componentDidMount() {
            this.redirect();
        }
        componentDidUpdate() {
            this.redirect();
        }
        redirect() {
            if (!this.props.isAuth) {
                this.props.history.push("/");
            }
        }

        render() {
            return (
                <ChildComponent {...this.props} />
            );
        }
    }
    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.authenticated
        };
    };
    return connect(mapStateToProps)(ComposeComp);
}