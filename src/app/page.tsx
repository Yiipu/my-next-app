import Banner from "@/components/banner"

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
            <li className="mb-2 w-full md:w-2/4 px-2"><a href={a.href}>
              <div className="card bg-perfume-600 text-white">
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </div>
            </a></li>
          )
        })}
    </ul>
    </>

  )
}
