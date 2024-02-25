import '/src/scss/Price.scss'

export default function Price () {
    return (
        <section className="price">
            <div className="container">
                <div className="price-wrapper">
                    <h1>Price Table</h1>
                    <p>We offer competitive price</p>
                    <div className="cards">
                        <div className="card">
                            <h2>Free</h2>
                            <p>Brief price description</p>
                            <p className='big-p-price'>0<span> $ /month</span></p>
                            <p>Only 2 Operators</p>
                            <p>Notifications</p>
                            <p>Landing Pages</p>
                            <button>Order Now</button>
                        </div>
                        <div className="card">
                            <h2>Standard</h2>
                            <p>Brief price description</p>
                            <p className='big-p-price'>5<span> $ /month</span></p>
                            <p>5+ Operators</p>
                            <p>Notifications</p>
                            <p>Landing Pages</p>
                            <button>Order Now</button>
                        </div>
                        <div className="card">
                            <h2>Premium</h2>
                            <p>Brief price description</p>
                            <p className='big-p-price'>10<span> $ /month</span></p>
                            <p>10+ Operators</p>
                            <p>Notifications</p>
                            <p>Landing Pages</p>
                            <button>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}