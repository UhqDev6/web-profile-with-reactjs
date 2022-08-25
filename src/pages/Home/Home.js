import {useEffect} from 'react';
export const Home = () => {
    useEffect(() => {
        document.title = "home";
    },[]);
    return(
        <section className="section">
            <h1 className="section-title">Welcome to My Profile</h1>
            <p className="section-description">Halo Everyone, this is my website profile. you can able my about all </p>
        </section>
    );
}