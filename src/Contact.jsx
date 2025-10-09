import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/contact.css';
import { supabase } from './lib/supabaseClient';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    });

    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const contactCardsRef = useRef([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formData.email && !formData.phone) {
            setError('Please insert your email or phone.');
            setIsSubmitting(false);
            return;
        }

        try {
            // Insert the form data into Supabase
            const { data, error } = await supabase
                .from('contacts')
                .insert([{
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    created_at: new Date()
                }]);

            if (error) {
                throw error;
            }

            toast.success('Message sent successfully!', { 
                position: "top-center", 
                autoClose: 3000 
            });

            // Reset form
            setFormData({
                name: '',
                phone: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Failed to send message. Please try again.', { 
                position: "top-center", 
                autoClose: 3000 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Animation Effect (unchanged)
    useEffect(() => {
        function checkContactCard() {
            const triggerButton = (window.innerHeight / 5) * 4;

            contactCardsRef.current.forEach((contactCard) => {
                if (contactCard) {
                    const contactCardTop = contactCard.getBoundingClientRect().top;
                    if (contactCardTop < triggerButton) {
                        contactCard.classList.add('showContactCard');
                    } else {
                        contactCard.classList.remove('showContactCard');
                    }
                }
            });
        }

        window.addEventListener('scroll', checkContactCard);
        checkContactCard();

        return () => {
            window.removeEventListener('scroll', checkContactCard);
        };
    }, []);

    return (
        <section id="contact">
            <div className="contact-container">
                <div 
                    className="contact-info contactCard" 
                    ref={(el) => contactCardsRef.current[0] = el}
                >
                    <h4 className="contact-subtitle">GET IN TOUCH</h4>
                    <h2 className="contact-title">Elevate your brand with <span>Me</span></h2>
                    <p className="contact-description">
                        Great brands start with great conversations. Let’s talk about how we can make your business unforgettable.
                    </p>
                </div>
                <div 
                    className="contact-form contactCard"
                    ref={(el) => contactCardsRef.current[1] = el}
                >
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name" 
                                value={formData.name} 
                                onChange={handleChange} 
                            />
                            <input 
                                type="text" 
                                name="phone" 
                                placeholder="Phone Number" 
                                value={formData.phone} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="input-group">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your Email" 
                                value={formData.email} 
                                onChange={handleChange}
                                required
                            />
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder="Subject" 
                                value={formData.subject} 
                                onChange={handleChange} 
                                required
                            />
                        </div>
                        <textarea 
                            name="message" 
                            placeholder="Your Message" 
                            value={formData.message} 
                            onChange={handleChange} 
                        ></textarea>
                        {error && <p id='formHandling' style={{ color: 'red' }}>{error}</p>}
                        <button 
                            type="submit" 
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Appointment Now'}
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}

export default Contact;