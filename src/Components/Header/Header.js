import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar w-100 navbar-expand-lg navbar-light navbar-dark bg-primary">
            <div className="container container-fluid text-white">
                <a className="navbar-brand fs-1 m-3" href="/#">DevQwiz</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav fs-5 ms-auto mb-2 mb-lg-0 text-white">
                        <li className="nav-item text-white">
                            <Link className='nav-link active' to='/'>Home</Link>
                        </li>
                        <li className="nav-item text-white">
                            <Link className='nav-link active' to='/topics'>Topics</Link>
                        </li>
                        <li className="nav-item text-white">
                            <Link className='nav-link active' to='/statistics'>Statistics</Link>
                        </li>
                        <li className="nav-item text-white">
                            <Link className='nav-link active' to='/about'>About</Link>
                        </li>
                        <li className="nav-item text-white">
                            <Link className='nav-link active' to='/blog'>Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;