import React from "react"
import "./layout.css"

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      tabIndex: 0
    }
    this.setTab = this.setTab.bind(this);
  }

  setTab(x){
    this.setState({
      tabIndex: x
    });
  }
 


  render() {
    switch (this.state.tabIndex){
      case 0:
          return (
            <div><div className="toggleRow">
              <button className="fancyButton" onClick={() => this.setTab(0)}>Work History</button>
             <button className="fancyButton activeFancyButton" onClick={() => this.setTab(1)}>Education</button>
             <button className="fancyButton" onClick={() => this.setTab(2)}>Tools</button>
             </div>
             <h4>Front End Developer, 4th Whale Marketing; Montreal, QC – July 2020-Present</h4>
<p>So far in my time with 4th whale, I have been the primary front end developer on their flagship product, a high volume streaming site built in PHP/Symfony.</p>
             <h4>Web Developer, Jonar; Montreal, QC – March 2019-July 2020</h4>
<p>Upon moving to Montreal I took a job with Jonar, a software company specializing in
ERP software. As the primary web developer, I spearheaded the launch of a new product website for ParagonERP, 
and relaunched Jonar's existing site using Gatsby/ReactJS.</p>
<h4>Owner, Freedom Gopher Web Development; Saskatoon, SK. July 2017-March
2019</h4><p>Shortly after obtaining a Computer Science degree from the University of Saskatchewan, I
started a small company doing freelance web design/development work. Most of these
projects were focused on improving or establishing an online presence for small and medium
sized companies.</p>
             
            </div>
          );  
      case 1:
          return (
            <div>
              <div className="toggleRow">
             <button className="fancyButton activeFancyButton" onClick={() => this.setTab(0)}>Work History</button>
             <button className="fancyButton" onClick={() => this.setTab(1)}>Education</button>
             <button className="fancyButton" onClick={() => this.setTab(2)}>Tools</button>
             </div>
             <h3>Bachelor of Arts in Philosophy, 2016</h3>
             <p>University of Saskatchewan. Saskatoon, SK.</p>
             <h3>Bachelor of Science in Computer Science, 2017</h3>
             <p>University of Saskatchewan. Saskatoon, SK.</p>
            </div>
            
          );   
      case 2:
          return (
            <div>
              <div className="toggleRow">
             <button className="fancyButton" onClick={() => this.setTab(0)}>Work History</button>
             <button className="fancyButton" onClick={() => this.setTab(1)}>Education</button>
             <button className="fancyButton activeFancyButton" onClick={() => this.setTab(2)}>Tools</button>
              </div>
             <h3>Here's a list of tools/technologies I've been using lately:</h3><ul>
             <li>HTML/CSS/JS</li><li>React</li><li>Gatsby, Netlify</li><li> Bootstrap, jQuery</li><li>Node.js</li><li>Git</li><li>Various CMS's</li>
             </ul>
            </div>
          );
    }
    
    
  }
};

export default Resume
