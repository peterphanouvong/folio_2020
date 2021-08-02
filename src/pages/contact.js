import React from "react";

import "./contact.css";
import resume from "../files/resume-2021-07-08.pdf";
import SEO from "../components/seo";

const Contact = () => {
  return (
    <>
      <SEO title="Contact" />
      <div className="contact">
        <span className="label">contact information</span>

        <hr />

        <div className="contact__grid">
          <div className="contact__unit">
            <h2>
              <a href="mailto:peterphanouvong@gmail.com">
                peterphanouvong@gmail.com ↗
              </a>
            </h2>
            <p>email</p>
          </div>
          <div className="contact__unit">
            <h2>
              <a download="peter-phanouvong_resume.pdf" href={resume}>
                peter-phanouvong_resume.pdf ↗
              </a>
            </h2>
            <p>resume</p>
          </div>
          <div className="contact__unit">
            <h2>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/peter-phanouvong-895b67134/"
              >
                /peter-phanouvong-895b67134 ↗
              </a>
            </h2>
            <p>linkedin</p>
          </div>
          <div className="contact__unit">
            <h2>
              <a
                href="https://www.instagram.com/petestudies/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                @petestudies ↗
              </a>
            </h2>
            <p>instagram</p>
          </div>

          <div className="contact__unit">
            <h2>
              <a
                href="https://github.com/peterphanouvong"
                rel="noreferrer"
                target="_blank"
              >
                /peterphanouvong ↗
              </a>
            </h2>
            <p>github</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
