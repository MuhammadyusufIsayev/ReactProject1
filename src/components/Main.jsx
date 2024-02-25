import '/src/scss/Main.scss'

export default function Main() {
    return (
        <main>
            <div className="container">
                <div className="main-wrapper">
                    <div className="left">
                        <h1>Work at the speed of thought</h1>
                        <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                        <div className="buttons">
                            <button>Get started</button>
                            <button>Watch the Video</button>
                        </div>
                    </div>
                    <div className="right">
                        <img src="/src/assets/amico.png" alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}
