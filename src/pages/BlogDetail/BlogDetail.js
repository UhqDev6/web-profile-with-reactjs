import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BlogDetail = () => {
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const params = useParams();

    useEffect(()=> {
        const getArticle = async () => {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);
            const response = await request.json();

            if(!request.ok){
                setNotFound(true);
            }

            document.title = response.title;
            setArticle(response);
            setLoading(false);
        }
        getArticle();
    }, [params]);

    if(notFound){
        return <h1>article not found :( </h1>
    }

    return(
        <section className="section">
            {loading ? (
                <i>Loading article</i>
            ) : (
                    <article className="article">
                    <h1 className="article-title">{article.title}</h1>
                    <time className="article-time">{ new Date(article.publishedAt).toLocaleDateString()}</time>
                    <div>
                        <img src={article.imageUrl} alt={article.title} className="article-image"/>
                    </div>
                        <p className="article-summary">{article.summary}</p>
                        <p className="article-source">Source : {' '}
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                {article.newsSite}
                            </a>
                        </p>
                    </article>
                )
            }
        </section>
    );
}