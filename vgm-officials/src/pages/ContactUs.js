function ContactUs() {
    return (
      <div className="contact-page">
        <h2>Contact Us</h2>
        <p>Reach out to us for collaborations, scrims, or any inquiries!</p>
  
        <div className="contact-links">
          {/* VGM Officials Mail */}
          <a href="mailto:vgmofficials@gmail.com" className="contact-card">
             VGM Officials Mail
          </a>
  
          {/* VGM Officials Instagram */}
          <a href="https://instagram.com/vgmofficials" target="_blank" rel="noopener noreferrer" className="contact-card">
             VGM Officials Instagram
          </a>
  
          {/* Owner Mail */}
          <a href="mailto:tiwariojas578@gmail.com" className="contact-card">
             Owner Mail
          </a>
  
          {/* Owner Instagram */}
          <a href="https://instagram.com/ojas_was_taken" target="_blank" rel="noopener noreferrer" className="contact-card">
            Owner Instagram
          </a>
        </div>
      </div>
    );
  }
  
  export default ContactUs;
  