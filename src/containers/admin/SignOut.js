import React from "react";
import { signOut } from "../../actions";
import { connect } from "react-redux";

const style = {
    textDecoration: 'none',
    cursor: 'pointer',
    marginLeft: 'auto',
    marginRight: '25px'
};

const SignOut = ({ signOut }) => {
    return <div style={style} onClick={() => signOut()}>
        SignOut
    </div>
};

const mapStateToProps = state => ({ signed: state.userReducer });
const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);