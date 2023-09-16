'use client'
import Link from "next/link";
import { useState } from "react";

export default function LoadList({
    buttonStyle = 'block mx-auto',
    listStyle = 'md:flex md:flex-row md:flex-wrap',
}: {
    buttonStyle?: string,
    listStyle?: string,
}
) {
    const [list, setList] = useState(loadMore(0))
    const [count, setCount] = useState(4)
    const [loading, setLoading] = useState(false)

    return (
        <div>
            <ul className={listStyle}>
                {list.map((item, index) => (
                    // 奇偶判断是为了添加间距
                    index % 2 ?
                        <li className="pb-2 md:w-2/4 md:pl-1" key={count + index}>
                            <ListItem article={item} />
                        </li> :
                        <li className="pb-2 md:w-2/4 md:pr-1" key={count + index}>
                            <ListItem article={item} />
                        </li>
                ))}
            </ul>
            <button className={`${buttonStyle} ${loading ? 'cursor-progress' : ''}`}
                onClick={() => {
                    setLoading(true)
                    setTimeout(() => {
                        setList([...list, ...loadMore(count)]) // 添加新项目到旧项目后面
                        setCount(count + 4)
                        setLoading(false)
                    }, 1000) // 模拟加载时间
                }}>
                {loading ? '加载中...' : '加载更多'}
            </button>
        </div>
    )
}

// TODO 拉取内容
function loadMore(count: number) {
    const sampleArticles = [
        {
            slug: `uid-${count + 1}`,
            title: "示例文章",
            description: `这是示例文章 ${count}.1`,
        },
        {
            slug: `uid-${count + 2}`,
            title: "示例文章",
            description: `这是示例文章 ${count}.2`,
        },
        {
            slug: `uid-${count + 3}`,
            title: "示例文章",
            description: `这是示例文章 ${count}.3`,
        },
        {
            slug: `uid-${count + 4}`,
            title: "示例文章",
            description: `这是示例文章 ${count}.4`,
        },
    ]

    return sampleArticles
}

function ListItem({
    article: blog,
}: {
    article: {
        slug: string;
        title: string;
        description: string;
    },
}) {
    return (
        <Link href={`blogs/${blog.slug}`}>
            <div className="card bg-perfume-600 text-white">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
            </div>
        </Link>
    )
}