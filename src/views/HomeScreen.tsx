import React from 'react'
import Sidebar from '../shared/components/Sidebar';
import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';

const HomeScreen = () => {
    return (
        <div className='flex h-full flex-column'>
            <div className="flex-none sticky-navbar">
                <Navbar />
            </div>
            <div className="flex flex-column flex-grow-1 w-full body-background card-container">
                <div className="grid">
                    <div className="col-2 flex justify-content-center alignt-items-center">
                        <Sidebar />
                    </div>
                    <div className="col-10 flex justify-content-center align-items-center">
                        <span>contenido</span>
                    </div>
                </div>
            </div>
            <div className="flex-none">
                <Footer />
            </div>
        </div>
    );
};

export default HomeScreen;