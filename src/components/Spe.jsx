import '/src/scss/Specefick.scss'

export default function Spe() { 
    return (
        <section className="specefick">
            <div className="container">
                <div className="specefick-wrapper">
                    <h1>Product  was Built Specifically for You</h1>
                    <div className="cards">
                        <div className="card">
                            <img src="/src/assets/icon.svg" alt="" />
                            <h3>First click tests</h3>
                            <p>While most people enjoy casino gambling,</p>
                        </div>
                        <div className="card">
                            <img src="/src/assets/icon (1).svg" alt="" />
                            <h3>Design surveys</h3>
                            <p>Sports betting, lottery and bingo playing for the fun</p>
                        </div>
                        <div className="card">
                            <img src="/src/assets/icon (2).svg" alt="" />
                            <h3>Preference tests</h3>
                            <p>The Myspace page defines the individual.</p>
                        </div>
                        <div className="card">
                            <img src="/src/assets/icon (3).svg" alt="" />
                            <h3>Five second tests</h3>
                            <p>Personal choices and the overall personality of the person. </p>
                        </div>
                    </div>
                    <button>SIGN UP NOW</button>
                </div>
            </div>
        </section>
    )
}