import '../App.css';
import { AboutExo } from '../components/AboutExo';
import { Footer } from '../components/Footer';
import { ForYou } from '../components/ForYou';
import { LandingPage } from '../components/LandingPage';
import { NavBar } from '../components/NavBar';

export const HomePage = () => {
    return(
        <>
        <NavBar/>
        <LandingPage/>
        <AboutExo/>
        <ForYou/>
        <Footer/>
        </>
    )
}