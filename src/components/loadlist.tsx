'use client'
import { useState } from "react";
import Card from "./card";

export default function LoadList() {
    const [list, setList] = useState(loadMore(0))
    const [count, setCount] = useState(4)
    const [loading, setLoading] = useState(false)

    return (
        <div>
            <ul className="md:flex md:flex-row md:flex-wrap">
                {list.map((item, index) => (
                    // 奇偶判断是为了添加间距
                    index % 2 ?
                        <li className="pb-2 md:w-2/4 md:pl-1">
                            <Card article={item} key={item.key} />
                        </li> :
                        <li className="pb-2 md:w-2/4 md:pr-1">
                            <Card article={item} key={item.key} />
                        </li>
                ))}
            </ul>
            <div className="text-center">
                {loading ?
                    <p>加载中...</p> :
                    <button onClick={() => {
                        setLoading(true)
                        setTimeout(() => {
                            setList([...list, ...loadMore(count)]) // 添加新项目到旧项目后面
                            setCount(count + 4)
                            setLoading(false)
                        }, 1000) // 模拟加载时间
                    }}>加载更多</button>}
            </div>
        </div>
    )
}

// TODO 拉取内容
function loadMore(count: number) {
    const sampleArticles = [
        {
            key: count,
            href: "",
            title: "示例文章",
            description: `这是示例文章 ${count}.1`,
        },
        {
            key: count + 1,
            href: "",
            title: "示例文章",
            description: `这是示例文章 ${count}.2`,
        },
        {
            key: count + 2,
            href: "",
            title: "示例文章",
            description: `这是示例文章 ${count}.3`,
        },
        {
            key: count + 3,
            href: "",
            title: "示例文章",
            description: `这是示例文章 ${count}.4`,
        },
    ]

    return sampleArticles
}


async function fetchArticle() {
    console.log('fetching data')

    const res = await fetch(`https://api.wrdan.com/hitokoto`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

async function Article() {
    const article = await fetchArticle().then(
        (jsres) => {
            return ({
                key: 0,
                href: '',
                title: jsres.text,
                description: jsres.author,
            })
        })
    return (
        <Card article={article}></Card>
    )
}
