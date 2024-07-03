import React, { useContext } from 'react';
import Banner from './Banner';
import { AuthContext } from '../context/AuthProvider'; // Assuming correct path to AuthProvider
import Maincard from './Maincard';
import Authors from './Authors';
import Footer from './Footer';

export const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            {user && (
                <>
                    <br />
                    <Banner />
                    <br />
                    <Authors />
                    <br />
                    <Maincard category="Top Book" /> 
                    <br />
                    <Maincard category="Fantasy" />
                    <br />
                    <Maincard category="Non-Fiction" />
                    <br />
                    <Footer />
                </>
            )}
        </>
    );
};
