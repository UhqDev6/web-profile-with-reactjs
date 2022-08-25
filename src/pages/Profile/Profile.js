import {useEffect} from 'react';
export const Profile = () => {
    useEffect(() => {
        document.title = 'Profile';
    },[])
    return(
        <section className="section">
            <h1 className="section-title">Profile</h1>
            <p className="section-description">I'm degree in university muslim of indonesia, and i`m work frontend web developer</p>
        </section>
    );
}