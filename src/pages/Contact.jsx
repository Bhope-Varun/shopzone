import {
  Mail,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-form-card">
        <h1>Contact Us</h1>

        <p className="contact-subtitle">
          We'd love to hear from you. Send us a
          message and we'll respond as soon as possible.
        </p>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
          />

          <button
            type="submit"
            className="primary-btn"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="contact-info-card">
        <h2>Get In Touch</h2>

        <div className="contact-item">
          <Phone size={20} />
          <div>
            <strong>Phone</strong>
            <p>+91 9876543210</p>
          </div>
        </div>

        <div className="contact-item">
          <Mail size={20} />
          <div>
            <strong>Email</strong>
            <p>support@shopkart.in</p>
          </div>
        </div>

        <div className="contact-item">
          <MapPin size={20} />
          <div>
            <strong>Address</strong>
            <p>Hyderabad, Telangana, India</p>
          </div>
        </div>

        <div className="contact-item">
          <Clock size={20} />
          <div>
            <strong>Working Hours</strong>
            <p>Mon - Sat | 9:00 AM - 7:00 PM</p>
          </div>
        </div>
      </div>

    </section>
  );
}