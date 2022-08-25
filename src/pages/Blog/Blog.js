import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = 'Blog';
    },[]);

    useEffect(() => {
        const getArticles =  async () => {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles`);
            console.log(request);
            const response = await request.json();
            setArticles(response);
            console.log(response);
        }
        getArticles();
        setLoading(false);
    }, []);
    return(
        <section className="section">
            <h1 className="section-title">Blog</h1>
            <p className="section-description">Berikut ini adalah tulisanku</p>

            { loading ? (<i>Loading data...</i>)
                :
                (
                    <div className="articles">
                        {articles.map((article)=> {
                            return (
                                <article key={article.id} className="article">
                                    <h2 className="article-title">
                                        <Link to={`/blog/${article.id}`}>
                                            {article.title}
                                        </Link>
                                    </h2>
                                    <time className="article-time">{ new Date(article.publishedAt).toLocaleDateString()}</time>
                                </article>
                            )
                        })}
                    </div>
                )
            }
        </section>
    );
}