import Banner from "@/components/banner"
import Card from "@/components/card"

// 接口
const articles = [
  { key: 1, href: "/", title: "Hello", description: "Hello ?" },
  { key: 2, href: "/", title: "About", description: "Hello !" },
  { key: 3, href: "/", title: "Setting", description: "Hello ." },
]

export default function Home() {
  return (
    <>
      <Banner />
      <ul className="flex flex-wrap mt-2">
        {articles.map(
          (a) => {
            return (
              <Card article={a} key={a.key}></Card>)
          })}
      </ul>
    </>
  )
}
