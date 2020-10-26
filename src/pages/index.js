import React from "react" 
import Layout from "../components/layout"
import SEO from "../components/seo"
import Resume from "../components/resume"
import Projects from "../components/projects"
import linkedIN from "../images/linkedIn.svg"
import github from "../images/github.svg"
import dl from "../images/download.svg"
import profile from "../images/t1Compressed.jpg"
import resume from "../../static/resumeOct2020.pdf"
import Typist from 'react-typist';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <div className="heroContentWrapper">
    <div className="introduction">
    <Typist cursor={{ hideWhenDone: true }}><Typist.Delay ms={500} />Hey,<Typist.Delay ms={1000} /><br /><div className="spacer5"></div>
    <span className="mb-5">My name is</span></Typist>
    <h1 className="myNameIs">Michael Pinder</h1>
    </div>
  </div>
  </section>
  <div className="mainContentWrapper">
  <div className="column">
  <section className="bio">
    <div className="contact">
      <p className="contactInfo mb-0"><a href="mailto:michael@freedomgopher.com">Get in touch</a> or check me out on</p>
      <div><a href="https://www.linkedin.com/in/michael-pinder-06b05b194/" className="no-ul"><img src={linkedIN} className="my-1 mx-1" alt="linkedIN logo"/></a>
      <a href="https://github.com/milos-prince" className="no-ul"><img src={github} className="my-1 mx-1" alt="github logo"/></a></div>
    </div>
    <div className="bioMainContent">
      <div className="photoWrapper"><img src={profile} alt="Profile picture"/></div>
      <div className="bioWriteup"><p>I'm a (mostly) front end developer born and raised in Saskatchewan, currently living my best life in Montreal, QC. I use a variety of tools to make beautiful and functional things on the internet. I firmly believe that Skyrim belongs to everybody.<br /><br /> I work alongside a fantastic team at <a href="https://www.4thwhale.com">4th whale marketing</a> that I am very proud to be a part of.</p></div>
    </div>
  </section>
  <section className="resume">
    <div className="titleWrapper">
      <h1>Resume</h1><div className="fancyBox"><a className="no-ul" href={resume} download><div className="d-flex"><p>Resume</p><img src={dl} alt="download icon"/></div></a></div>
    </div>
    <div className="resumeContentSection">
      <Resume />
    </div>
  </section>
  <section className="projects">
    <div className="titleWrapper">
      <h1>Projects</h1>
      {/*<div className="fancyBox"><div className="d-flex"><p>Projects</p><img src={dl} /></div></div>
      This is for Tristan's resume*/}
    </div>
    <Projects />
  </section>
  <div className="d-flex lastLine"><p className="my-1">Oh hey you made it to the bottom! </p><a href="mailto:michael@freedomgopher.com" className="no-ul"><div className="fancyBox2"><p className="cm">Contact me</p></div></a></div>
  </div>
  </div>
  </Layout>
)

export default IndexPage
