import React from 'react'
import picFood1 from '../pics/restauranfood.jpg'
import picFood2 from '../pics/greeksalad.jpg'
import picFood3 from '../pics/bruchetta.svg'
import picFood4 from '../pics/lemondessert.jpg'
import picAbout from '../pics/about.jpg'
import '../style.css'
import { useNavigate } from 'react-router-dom';


function Main() {
    const navigate = useNavigate();

    const handleButtonClickBooking = () => {
        navigate('/booking');
    };

    return (
    <main>
        <section className="section-1">
            <div className="section-1-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focussed on traditional recipes served with a mordern twist.</p>
                <button className="button-1" onClick={handleButtonClickBooking} aria-label="On Click to get to Reservation Page">Reserve a Table</button>
            </div>
            <img src={picFood1} alt="Little Lemon Intro" className="section-1-pic"/>
        </section>

        <section className="section-2">
            <div className="section-2-header">
                <h2>This week specials!</h2>
                <button className="button-1" aria-label="Click to see Online Menu">Online Menu</button>
            </div>
            <div className="section-2-panels">
                <div className="section-2-panel">
                    <img src={picFood2} alt="Greek Salad" className="section-2-panel-img"/>
                    <div className="section-2-panel-content">
                        <div className="section-2-panel-header">
                            <h3 className="section-2-panel-title">Greek Salad</h3>
                            <span className="section-2-panel-price">$ 12.99</span>
                        </div>
                        <p className="section-2-panel-text">The famous Greek Salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunshy garlic and rosemary croutons.</p>
                        <div className="section-2-panel-delivery">
                            <span>Order a delivery</span>
                        </div>
                    </div>
                </div>
                <div className="section-2-panel">
                    <img src={picFood3} alt="Bruchetta" className="section-2-panel-img"/>
                    <div className="section-2-panel-content">
                        <div className="section-2-panel-header">
                            <h3 className="section-2-panel-title">Bruchetta</h3>
                            <span className="section-2-panel-price">$ 5.89</span>
                        </div>
                        <p className="section-2-panel-text">Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <div className="section-2-panel-delivery">
                            <span>Order a delivery</span>
                        </div>
                    </div>
                </div>
                <div className="section-2-panel">
                    <img src={picFood4} alt="Lemon Dessert" className="section-2-panel-img"/>
                    <div className="section-2-panel-content">
                        <div className="section-2-panel-header">
                            <h3 className="section-2-panel-title">Lemon Dessert</h3>
                            <span className="section-2-panel-price">$ 5.00</span>
                        </div>
                        <p className="section-2-panel-text">This comes straight from gradma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <div className="section-2-panel-delivery">
                            <span>Order a delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-3">
            <h2>Testimonials</h2>
            <section className="section-3-testimonials-section">
            <div className="section-3-testimonial-panel">
                <div className="section-3-testimonial-header">
                    <img src="path-to-profile-picture-1.jpg" alt="Profile 1" className="section-3-testimonial-img"/>
                    <div className="profile-info">
                        <div className="section-3-stars">
                            ★★★★☆
                        </div>
                        <p className="section-3-profile-text">John Doe, New York</p>
                    </div>
                </div>
                <p className="section-3-testimonial-quote">"Little Lemon is my favorite spot! The food is always delicious, and the atmosphere is so welcoming."</p>
            </div>

            <div className="section-3-testimonial-panel">
                <div className="section-3-testimonial-header">
                    <img src="path-to-profile-picture-2.jpg" alt="Profile 2" className="section-3-testimonial-img"/>
                    <div className="profile-info">
                        <div className="section-3-stars">
                            ★★★★☆
                        </div>
                        <p className="section-3-profile-text">Emily Doe, New Jersey</p>
                    </div>
                </div>
                <p className="section-3-testimonial-quote">"The ambiance at Little Lemon is perfect for a cozy dinner. The staff was attentive, and the menu had a great variety. Highly recommend!"</p>
            </div>

            <div className="section-3-testimonial-panel">
                <div className="section-3-testimonial-header">
                    <img src="path-to-profile-picture-3.jpg" alt="Profile 3" className="section-3-testimonial-img"/>
                    <div className="profile-info">
                        <div className="section-3-stars">
                            ★★★★★
                        </div>
                        <p className="section-3-profile-text">Magen Ryan, New York</p>
                    </div>
                </div>
                <p className="section-3-testimonial-quote">"A hidden gem! The desserts were absolutely amazing, and the staff was very friendly."</p>
            </div>

            <div className="section-3-testimonial-panel">
                <div className="section-3-testimonial-header">
                    <img src="path-to-profile-picture-4.jpg" alt="Profile 4" className="section-3-testimonial-img"/>
                    <div className="profile-info">
                        <div className="section-3-stars">
                            ★★★★★
                        </div>
                        <p className="section-3-profile-text">Lauren Hill, New York</p>
                    </div>
                </div>
                <p className="section-3-testimonial-quote">"Absolutely fantastic! The best dining experience I've had in a long time. Highly recommend Little Lemon!"</p>
            </div>

            </section>
        </section>

        <section className="section-4">
            <div className="section-4-text">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Little Lemon is a cozy, family-owned restaurant in the heart of Chicago. We serve authentic, home-cooked meals crafted with the freshest ingredients and a touch of love. At Little Lemon, traditional flavors blend with modern creativity in a warm, welcoming atmosphere. Join us to experience the taste of family and tradition.</p>
            </div>
            <img src={picAbout} alt="About" className="section-4-pic"/>
        </section>
    </main>
        )
}

export default Main