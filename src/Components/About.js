import React, { Component } from 'react';
import resume from '../assets/resume.pdf';

class About extends Component {
  render() {
    // We can destructure the props this way 
    const {
      data: {
        name,
        image,
        phone,
        email,
        address: { street, city, state, zip },
      },
    } = this.props;

    return (
      <div>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={image}
                alt="Alex Bangau Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>
                I studied Electronics and Communication, and during my studies I
                got in contact with the basic concepts of programming. Since
                then I've always wanted to become a developer. Fortunately I
                have discovered Microverse and joined without any hesitation.
                <br />
                <br />I am passionate about ideating, conceptualizing and
                producing consumer-centric as well as technology-enabled
                products from level zero. Open for exploring exciting full-stack
                development opportunities in startups as well as companies with
                scale.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>
                      <a
                        href={`mailto:${email}?subject=The%20subject%20of%20the%20mail`}
                      >
                        {email}
                      </a>
                    </span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a
                      href={resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button"
                    >
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
