import {useEffect} from 'react';
export const Contact = () => {
    useEffect(() => {
        document.title = 'Contact';
    },[]);
    return(
        <section className="section">
            <h1 className="section-title">Contact Person</h1>
            <p className="section-description">You able call me at : </p>
            <ul>
                <li>Email : uhqdev@gmail.com</li>
                <li>Wa: 082398314960</li>
            </ul>
            <p className="section-description">You able call me at sosial media : </p>
            <ul>
                <li>
                    <a href="www.instagram.com/uhqdev">Instagram</a>
                </li>
                <li>
                    <a href="http://www.twitter.com/uhqdev">Twitter</a>
                </li>
            </ul>
        </section>
    );
}