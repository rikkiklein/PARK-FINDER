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
        <div className="outer-about">
        <div className="about">
          <h5>About Us:</h5>

            <div className="inner-about">

              <div className="name">
                <div className="image-rikki"></div>
                <h4>Rikki Rifka Rabinowitz</h4>
              </div>

              <div className="description">
                <h6>About Me:</h6>
                <p>I am a Frontend Web Developer who loves utilizing my creativity and hardworking skills to ensure the best outcome possible.
                Let's connect!</p>
                <h6>Additional Info:</h6>
                <p className="pEnd">I graduated Brooklyn College Suma Cum Laude with a Bachelor of Science in Computer Science and a double minor in Accounting and Multimedia.
                </p>
                <div className="gitFlex">
                  <a className="links" target="_blank" href="https://github.com/rikkirabz">Rikki's GitHub</a>
                  <a className="links" target="_blank" href="https://www.linkedin.com/in/rifkarabinowitz">Rikki's LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="inner-about">

              <div className="name">
                <div className="image-elena"></div>
                <h4>Elena Peng</h4>
              </div>

              <div className="description">
                <h6>About Me:</h6>
                    <p>I am a developer and former showjumper, who can be found yelling at her code (that was working just a minute ago), or in my
                      horse's stall with a bottle of chablis.</p>

                <h6>Additional Info:</h6>
                <p className="pEnd">
                  I am currently based in New York and Beijing, China.</p>
                <div className="gitFlex">
                  <a className="links" target="_blank" href="https://github.com/elenayyyp">Elena's GitHub</a>
                </div>
              </div>
            </div>

            <div className="inner-about">

              <div className="name">
                <div className="image-ivan"></div>
                <h4>Ivan Trujillo</h4>
              </div>

              <div className="description">
                <h6>About Me:</h6>
                <p>I am a developer and musician based out of New York City, and when I am not rocking out with my bandmates,
                  I am polishing my coding skills.</p>
                <h6>Additional Info:</h6>
                <p className="pEnd">If I am not coding, I can be found attending your local music venue supporting local talent.</p>
                <div className="gitFlex">
                  <a className="links" target="_blank" href="https://github.com/Elkrival">Ivan's GitHub</a>
                  <a className="links" target="_blank" href="https://www.linkedin.com/in/ivan-trujillo-82903176">Ivan's LinkedIn</a>
                             </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    )
  }
}

export default About
