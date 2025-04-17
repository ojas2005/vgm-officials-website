"use client"

import { useState } from "react"
import { Mail, Instagram, Send, MessageSquare } from "lucide-react"
import "./ContactUs.css"

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setFormSubmitted(true)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        window.alert("Message sent successfully!")
      } else {
        console.error(data.error)
        setErrorMessage("Failed to send message. Please try again.")
      }
    } catch (err) {
      console.error("Error:", err)
      setErrorMessage("Something went wrong. Please try again later.")
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>
          Get In <span className="text-gradient">Touch</span>
        </h1>
        <p>Reach out to us for collaborations, scrims, or any inquiries!</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Connect With Us</h2>

          <div className="contact-methods">
            <a href="mailto:vgmofficials@gmail.com" className="contact-method">
              <div className="method-icon">
                <Mail size={24} />
              </div>
              <div className="method-details">
                <h3>Email Us</h3>
                <p>vgmofficials@gmail.com</p>
              </div>
            </a>

            <a
              href="https://instagram.com/vgmofficials"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method"
            >
              <div className="method-icon">
                <Instagram size={24} />
              </div>
              <div className="method-details">
                <h3>Instagram</h3>
                <p>@vgmofficials</p>
              </div>
            </a>

            <a
              href="https://discord.gg/UAa4V2HhaS"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method"
            >
              <div className="method-icon">
                <MessageSquare size={24} />
              </div>
              <div className="method-details">
                <h3>Discord</h3>
                <p>Join our server</p>
              </div>
            </a>
          </div>

          <div className="owner-contact">
            <h3>Contact Our Owner</h3>
            <div className="owner-methods">
              <a href="mailto:tiwariojas578@gmail.com" className="owner-method">
                <Mail size={16} />
                <span>tiwariojas578@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/ojas_was_taken"
                target="_blank"
                rel="noopener noreferrer"
                className="owner-method"
              >
                <Instagram size={16} />
                <span>@ojas_was_taken</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          {!formSubmitted && (
            <>
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <button type="submit" className="submit-btn">
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How can I join VGM OFFICIALS?</h3>
            <p>
              We regularly hold tryouts for talented players. Follow our social media channels for announcements about
              recruitment opportunities.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do you offer coaching or mentorship?</h3>
            <p>
              Yes, our experienced players occasionally offer coaching sessions. Contact us for more information about
              availability and rates.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can we arrange a scrim with your team?</h3>
            <p>We're always looking for practice opportunities. Reach out via email or Discord to schedule a scrim.</p>
          </div>

          <div className="faq-item">
            <h3>Do you have sponsorship opportunities?</h3>
            <p>
              We're open to sponsorship and partnership opportunities. Please contact our owner directly to discuss
              potential collaborations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
