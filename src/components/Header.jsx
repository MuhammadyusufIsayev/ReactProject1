import '/src/scss/Header.scss'

export default function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="nav-logo">
                        <img src="/src/assets/Group 190.svg" alt="" />
                        <h1>Product</h1>
                    </div>
                    <ul className='nav-list'>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                        <button>Sign In</button>
                        <button>Sign Up</button>
                    </ul>
                </nav>
            </div>
        </header>
    )
}