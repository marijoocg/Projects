import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(props) {
  //const history = useHistory();
  var [registerInfo, setRegisterInfo] = useState({
    usrName: "",
    password: "",
    name: "",
    lname: "",
  });
  var [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  function handleUpdate(e) {
    const { value, name } = e.target;
    setRegisterInfo((prevValue) => {
      if (name === "Username") {
        return {
          ...prevValue,
          usrName: value,
        };
      } else {
        return {
          ...prevValue,
          password: value,
        };
      }
    });
  }

  function logIn() {
    navigate("/Mainpage");
  }

  function processLogin(e) {
    e.preventDefault();
    var usrName = registerInfo.usrName;
    var usrPass = registerInfo.password;
    /*
        axios.get("/login/"+usrName+"/"+usrPass).then((res)=>{
            var data=res.data;
            console.log(data);
            if(!data.hasOwnProperty("error")){
                registerInfo.name = data.name;
                registerInfo.lname = data.lname;
                props.handler(registerInfo);
            } else {
                setErrorMsg(data.message);
            }
        }).catch((err=>{
            console.error(err.error)
        }));
        */
    console.log("Calling axios...");
    axios
      .post("/login", { user: usrName, pass: usrPass })
      .then((res) => {
        var data = res.data;
        console.log(data);
        if (!data.hasOwnProperty("error")) {
          console.log("Success");
          registerInfo.name = data.name;
          registerInfo.lname = data.lname;
          logIn();
        } else {
          setErrorMsg(data.message);
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  return (
    <form>
      <input
        name='Username'
        type='text'
        placeholder='Username ( gcastillo )'
        onChange={handleUpdate}
      />
      <br></br>
      <br></br>
      <input
        name='Password'
        type='password'
        placeholder='Password ( BestTeacherEver! )'
        onChange={handleUpdate}
      />
      <br></br>
      <br></br>
      <button
        type='submit'
        onClick={processLogin}
      >
        Log In
      </button>
      {errorMsg}
    </form>
  );
}

export default Login;
