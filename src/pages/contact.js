import React from "react"
import resume from "../files/resume.pdf"

const Contact = () => {
  return (
    <div className="contact">
      <p style={{ marginBottom: "2rem" }}>CONTACT INFO</p>
      <div className="contact-grid">
        <div className="contact-unit">
          <h4>email</h4>
          <h2>
            <a href="mailto:peterphanouvong@gmail.com">
              peterphanouvong@gmail.com ↗
            </a>
          </h2>
        </div>
        <div className="contact-unit">
          <h4>resume</h4>
          <h2>
            <a download="PeterPhanouvong_resume.pdf" href={resume}>
              PeterPhanouvong_resume.pdf ↗
            </a>
          </h2>
        </div>
        <div className="contact-unit">
          <h4>linkedin</h4>
          <h2>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/peter-phanouvong-895b67134/"
            >
              /peter-phanouvong-895b67134 ↗
            </a>
          </h2>
        </div>
        <div className="contact-unit">
          <h4>instagram</h4>
          <h2>
            <a
              href="https://www.instagram.com/peterphanouvong/?hl=en"
              target="_blank"
            >
              @peterphanouvong@gmail.com ↗
            </a>
          </h2>
        </div>

        <div className="contact-unit">
          <h4>github</h4>
          <h2>
            <a href="https://github.com/peterphanouvong" target="_blank">
              /peterphanouvong@gmail.com ↗
            </a>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Contact
