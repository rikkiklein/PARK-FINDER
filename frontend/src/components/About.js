import React, { Component } from 'react';
import Background           from './Background.js';
import Header               from './Header.js';
import Footer               from './Footer.js';
import '../css/Home.css';

class About extends Component{

  render(){
    return(
      <div>
        <Background/>
        <Header/>
        <div className="about">
          <h5>About Us:</h5>
          <div className="inner-about">

            <div className="name">
              <h4>Rikki Rifka Rabinowitz</h4>
              <h6>About Me:</h6>
              <p>I am a Frontend Web Developer who loves utilizing my creativity and hardworking skills to ensure the best outcome possible.
                Let's connect!'</p>
              <h6>Additional Info:</h6>
              <p className="pEnd">I graduated Brooklyn College Suma Cum Laude with a Bachelor of Science in Computer Science and a double minor in Accounting and Multimedia.
              </p>
              <a className="links" target="_blank" href="https://github.com/rikkirabz">Rikki's GitHub</a>
              <a className="links" target="_blank" href="https://www.linkedin.com/in/rifkarabinowitz">Rikki's LinkedIn</a>

            </div>

            <div className="name">
              <h4>Elena Peng</h4>
              <h6>About Me:</h6>
              <p>Lorem Ipsum</p>
              <h6>Additional Info:</h6>
              <p>Lorem Ipsum</p>
              <button className="favorite">LinkedIn</button>
              <button className="favorite">Github</button>
            </div>



            <div className="name">
              <h4>Ivan Trujillo</h4>
              <h6>About Me:</h6>
              <p>I am a developer and musician based out of New York City, and when I am not rocking out with my bandmates, I am polishing my coding skills.</p>
              <h6>Additional Info:</h6>
              <p>If I am not coding, I can be found attending your local music venue supporting local talent.</p>

                <a className="links" target="_blank" href="https://github.com/rikkirabz">Rikki's GitHub</a>
                <a className="links" target="_blank" href="https://www.linkedin.com/in/rifkarabinowitz">Rikki's LinkedIn</a>

            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default About
