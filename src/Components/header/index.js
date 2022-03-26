import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='header-logo'>BudgetX<i className="fas fa-wallet"></i>
                </div>
                
                <div className='header-button'>
                <a href='www.github/neo1415.com'
                target='_blank'
                rel='noopener noreferrer'
                >
                    <i className="fab fa-github"></i>Git
                </a>
                
            </div>
            </div>
           
            
        </div>
    )
}

export default Header
