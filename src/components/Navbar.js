import React from "react";
import "../css/Navbar.css";
import {auth} from "../firebase"
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

function logout(){
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("log-out successful.")
  }).catch((error) => {
    // An error happened.
    console.log("log-out Unsuccessful.Try again.")
  });
}
function logOutAndGoToSignUp()
{
  logout();
  window.location.replace("/SignUp");
}
export default function NavBar(props) {
  // useState(()=>{
  //   props.togglemode()
  // },[])
  return (
    <>
      <nav className="fw-bold fixed-top"style={{background: `${props.mode==="light"?"white":"black"}`,color:"black !important"}} >
      <div className="left-side" >
        <input type="checkbox"/>
        <div className="nav-links" style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}}>
          
          <h3><img src="https://www.linkpicture.com/q/7896.png" alt="..." height="38px" width="35px"/></h3>
          <h3 style={{color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}}>Menu App</h3>
          <div className="nav-link-wrapper hover-underline-animation"><Link style={{color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} to="/">Home</Link></div>
          <div className="nav-item dropdown hover-underline-animation">
          <Link style={{color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} className="nav-link dropdown-toggle " to="/#" role="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Filter By 
          </Link>
          <ul className="dropdown-menu " style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} aria-labelledby="dropdownMenuButton">
            <li>
              <Link className="hover-underline-animation dropdown-item fw-bold" style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} to="/#">Type &raquo;</Link>
              <ul className="dropdown-menu dropdown-submenu fw-bold" style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}}>
                  <li>
                    <Link className="dropdown-item hover-underline-animation fw-bold"style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}}  to="/Breakfast">Breakfast</Link>
                  </li>
                  <li>
                    <Link style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} className="dropdown-item hover-underline-animation fw-bold" to="/Lunch">Lunch</Link>
                  </li>
                  <li>
                    <Link style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} className="dropdown-item hover-underline-animation fw-bold" to="/Dinner">Dinner</Link>
                  </li>
                </ul>
              </li>
            <li>
              <Link style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} className="dropdown-item hover-underline-animation fw-bold" to="/#">Food Type &raquo;</Link>
              <ul className="dropdown-menu dropdown-submenu fw-bold" style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}}>
                <li>
                  <Link style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} className="dropdown-item hover-underline-animation fw-bold" to="/Veg">Veg.</Link>
                </li>
                <li>
                  <Link style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} className="dropdown-item hover-underline-animation fw-bold" to="/Non_Veg">Non-Veg.</Link>
                </li>
              </ul>
            </li>
            <li>
