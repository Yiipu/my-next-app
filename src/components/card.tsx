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
        <li className="mb-2 w-full md:w-2/4 px-2">
            <a href={article.href}>
                <div className="card bg-perfume-600 text-white">
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                </div>
            </a>
        </li>
    )
}