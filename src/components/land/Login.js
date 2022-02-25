import React from 'react';
import './login.css';
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>

function Login() {
  return (
    <div className='LandingPage'>
       <div className="Logo"><a href="#">Univer<span>City.</span></a></div>
       <div className="container">
          <div className="selectText fadeIn first">Login as :</div>
          <div className="selectUser">

            <div class="card fadeIn second">
                <div class="box">
                    <i class="fas fa-paint-brush"></i>
                    <div class="text">Adiministration</div>
                </div>
              </div>

              <div class="card fadeIn third">
                <div class="box">
                    <i class="fas fa-paint-brush"></i>
                    <div class="text">Enseignant</div>
                </div>
              </div>

              <div class="card fadeIn foruth">
                <div class="box">
                    <i class="fas fa-paint-brush"></i>
                    <div class="text">Etudiant</div>
                </div>
              </div>
          </div>
          
        </div>

        <div className="wrapper fadeInDown">
              <div id="formContent">
              
                <div className="fadeIn first">
                  <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
                </div>

               
                <form>
                  <input type="text" id="login" class="fadeIn second" name="login" placeHolder="login"/>
                  <input type="text" id="password" class="fadeIn third" name="login" placeHolder="password"/>
                  <input type="submit" class="fadeIn fourth" value="Log In"/>
                </form>

              
                <div id="formFooter">
                  <a class="underlineHover" href="#">Forgot Password?</a>
                </div>

              </div>
          </div>
      </div>

      
  )
  
}
export default Login;