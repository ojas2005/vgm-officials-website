"use client"

import { useState } from "react"
import { Mail, Instagram, Send, MessageSquare, CheckCircle } from "lucide-react"
import "./ContactUs.css"

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1000)
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
          {formSubmitted ? (
            <div className="form-success">
              <CheckCircle size={50} />
              <h2>Message Sent!</h2>
              <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
              <button onClick={() => setFormSubmitted(false)} className="reset-btn">
                Send Another Message
              </button>
            </div>
          ) : (
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
