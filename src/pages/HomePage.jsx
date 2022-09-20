import '../App.css';
import { AboutExo } from '../components/AboutExo';
import { LandingPage } from '../components/LandingPage';
import { NavBar } from '../components/NavBar';

export const HomePage = () => {
    return(
        <>
        <NavBar/>
        <LandingPage/>
        <AboutExo/>
        </>
    )
}