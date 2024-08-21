import React from 'react'
import picFood1 from '../pics/restauranfood.jpg'
import '../style.css'


function Main() {
    return (
    <main>
        <section className="section-1">
            <div className="section-1-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned.</p>
                <button class="button-1">Reserve a Table</button>
            </div>
            <img src={picFood1} alt="Little Lemon Intro" className="section-1-pic"/>
        </section>

        <section className="section-2">
            <div className="section-2-header">
                <h2>This week specials!</h2>
                <button class="button-1">Reserve a Table</button>
            </div>
            <div className="section-2-text">
                <p>Food 1.</p>
                <p>Food 2.</p>
                <p>Food 3.</p>
            </div>
        </section>

        <section className="section-3">
            <h2>Section 3</h2>
            <p>Placeholder content for section 3.</p>
        </section>

        <section className="section-4">
            <div className="section-4-text">
                <h2>Section 4</h2>
                <h2>Chicago</h2>
                <p>Placeholder content for section 3.</p>
            </div>
            <img src={picFood1} alt="About" className="section-4-pic"/>
        </section>
    </main>
        )
}

export default Main