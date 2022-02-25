import React from 'react';
import './login.css';
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
function Login() {
  return (
    <div className='LandingPage'>
       <div className="Logo"><a href="#">Univer<span>City.</span></a></div>
       <div className="container">
            <div className="selectText">Login as :</div>
            <div className="selectUser">

              <div class="card">
                  <div class="box">
                      <i class="fas fa-paint-brush"></i>
                      <div class="text">Adiministration</div>
                  </div>
                </div>

                <div class="card">
                  <div class="box">
                      <i class="fas fa-paint-brush"></i>
                      <div class="text">Enseignant</div>
                  </div>
                </div>

                <div class="card">
                  <div class="box">
                      <i class="fas fa-paint-brush"></i>
                      <div class="text">Etudiant</div>
                  </div>
                </div>

            </div>
       </div>
    </div>
  )
}

export default Login;