import React from 'react'

const Layout = ({ children }) => {
    const [isSliderOpen, setIsSliderOpen] = useState(true);
    return (
        <div className=''>
            <Header />
            <div className='main-container'>
                <Slider isOpen={isSliderOpen} />
                <main className='content'>
                    {children}
                </main>
            </div>




        </div>
    )
}

export default Layout