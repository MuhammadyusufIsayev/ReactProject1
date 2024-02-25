import '/src/scss/Content.scss'

export default function Content(){
    return(
        <section className='content'>
            <div className="container">
                <div className="content-wrapper">
                    <h1>Contents Strategies</h1>
                    <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
                    <div className="cards">
                        <div className="card">
                            <div className="top">
                                <img src="/src/assets/image bg.png" alt="" />
                            </div>
                            <div className="title">
                                <p>By <span>Wahid Ari</span> |  03 March 2019</p>
                                <h2>Increasing Prosperity With Positive Thinking</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="top">
                                <img src="/src/assets/image bg (1).png" alt="" />
                            </div>
                            <div className="title">
                                <p>By <span>Wahid Ari</span> |  03 March 2019</p>
                                <h2>Motivation Is The First Step To Success</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="top">
                                <img src="/src/assets/image bg (2).png" alt="" />
                            </div>
                            <div className="title">
                                <p>By <span>Wahid Ari</span> |  03 March 2019</p>
                                <h2>Success Steps For Your Personal Or Business</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}