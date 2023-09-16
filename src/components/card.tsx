export default function Card({
    article,
}: {
    article: {
        key: number;
        href: string;
        title: string;
        description: string;
    },
}) {
    return (
        <div>
            <a href={article.href}>
                <div className="card bg-perfume-600 text-white">
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                </div>
            </a>
        </div>
    )
}