import React, { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/footer.css";
import { supabase } from "./lib/supabaseClient";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const footerRef = useRef(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkFooter = () => {
      if (!footerRef.current) return;
      const triggerPoint = (window.innerHeight / 5) * 4;
      const footerTop = footerRef.current.getBoundingClientRect().top;
      footerRef.current.classList.toggle(
        "showFooter",
        footerTop < triggerPoint
      );
    };

    window.addEventListener("scroll", checkFooter);
    checkFooter();
    return () => window.removeEventListener("scroll", checkFooter);
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const trimmedEmail = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase.from("subscribers").insert({
        email: trimmedEmail,
        created_at: new Date().toISOString(),
      });

      if (error) throw error;

      toast.success("Thank you for subscribing! We'll be in touch soon.");
      setEmail("");
    } catch (error) {
      if (error.code === "23505") {
        toast.info("You're already subscribed! Thank you for your interest.");
      } else {
        console.error("Subscription error:", error.message);
        toast.error(
          "We couldn't process your subscription. Please try again later."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollToContact: true } });
    }
  };

  const getQuickLinks = () => {
    switch (location.pathname) {
      case "/about":
        return (
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        );
      case "/projects":
        return (
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        );
      case "/":
        return (
          <ul>
            <li>
              <a href="#banner">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#clients">Clients</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
          </ul>
        );
      default:
        return (
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        );
    }
  };

  return (
    <footer id="footer">
      <div className="footer-container" ref={footerRef}>
        <div className="footer-left">
          <h2 className="footer-logo">Muhammad Noman</h2>
          <h3 className="footer-title">
            <span>Get Ready</span> To <br /> Create Great
          </h3>
          <form className="email-subscribe" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                <i className="fas fa-envelope"></i>
              )}
            </button>
          </form>
        </div>

        <div className="footer-links">
          <h4>Quick Link</h4>
          {getQuickLinks()}
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <i className="fas fa-envelope"></i> muhammadnomanorakzai313@
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> Peshawar Pakistan
            </li>
            <li>
              <i className="fas fa-phone"></i>+92 03285609765
            </li>
          </ul>
          <div className="social-icons">
            <a
              href="www.linkedin.com/in/muhammad-noman-7a3156339"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/muhammadnomanorakzai"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://wa.me/923181915749"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © <span>Muhammad Noman</span> 2025 | All Rights Reserved
        </p>
        <div className="footer-links-bottom">
          <a href="#">Privacy Policy</a>
          <a href="#" onClick={handleContactClick}>
            Contact Us
          </a>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </footer>
  );
}

export default Footer;
