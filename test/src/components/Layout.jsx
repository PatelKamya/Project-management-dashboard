import React from 'react'
import Slider from './Slider';
import Header from './header';

const Layout = ({ children }) => {
    return (
        <div className=''>

            <Header />
            <div className="d-flex">
                <Slider />
                <main className='w-100 p-2'>
                    {children}
                </main>
            </div>
        </div>
        
    )
}

export default Layout