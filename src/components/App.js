import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {connect} from "react-redux";
import SignIn from "../admin/SignIn";
import ApplicationContent from "./ApplicationContent";
import {signOut} from "../actions";

const App = (props) => {
    const { signed } = props;

    return (
        <Router>
            {signed
                ? <ApplicationContent />
                : <SignIn />
            }
        </Router>
    )
};

const mapStateToProps = state => ({
    signed: state.userReducer
});
const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
