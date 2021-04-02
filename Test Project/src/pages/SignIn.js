import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { signInUser } from "../actions/authAction";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink,
  useHistory,
} from "react-router-dom";

import Button from "../components/Button";
import Input from "../components/Input";

import Logo from "../components/Logo";
import Toast from "../components/Toast";

import at from "../assets/at.png";
import unlock from "../assets/unlock.png";
import inp from "../assets/in-img.svg";
import checkIcon from "../assets/check.svg";

const SignIn = (props) => {

  const history = useHistory();

  const [testList, setTestList] = useState([]);

  const [loading, setLoading] = useState(false);


  const handleSignIn = (e) => {
    e.preventDefault();


    const details = {
      email: e.target[0].value,
      password: e.target[1].value

    }

    props.signInUser(details).then((response) => {
      setLoading(false);

      // console.log(props.user)
      //   console.log(response);
        setTestList([
          {
            id: 1,
            title: 'Success',
            description: 'Sign In was successfull',
            backgroundColor: '#5cb85c',
            icon: checkIcon
          }
        ])
      }).catch(e => {
        // console.log(e.response.data);
    })
  };

  return (
    <div className="form-container">

      <div className="form-div">

        <div className="form-nav">
          <Logo color={"#3CB471"} />
        </div>

        <Toast
           toastList={testList}
           position="top-left"
        />

        <div className="form-div-hd">
          <p>continue for free</p>
          <p>Sign in</p>
          <form onSubmit={handleSignIn}>
            <Input
              placeholder={"name@example.com"}
              type={"email"}
              name={"email"}
              img={at}
            />
            <Input
              placeholder={"at least 8 characters"}
              type={"password"}
              name={"password"}
              img={unlock}
            />
            <button className="input-btn">
            {
                loading
                ?
                <i className="fa fa-spinner fa-spin" />
                :
                "Sign In"
              }
            </button>
            <p className="input-p">
              Don't have an account? <Link to="/signup"><span>Sign up</span></Link>
            </p>
          </form>
        </div>
      </div>

      <div className="form-img">
        <div className=" al al-one">
          <p style={{ fontSize: "30px", color: "white" }}>Welcome Back!</p>
          <p style={{ fontSize: "12px", color: "white" }}>Enjoy your stay :)</p>
        </div>
        <img src={inp} />
      </div>
    </div>
  );
};

const mapStatesToProps = (state, props) => {
  return {
    user: state.user
  }
}

export default connect(mapStatesToProps, { signInUser })(SignIn);