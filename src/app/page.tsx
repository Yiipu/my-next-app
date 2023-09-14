'use client'
import Banner from "@/components/banner"
import LoadList from "@/components/loadlist"

export default function Home() {
  return (
    <div>
      <div className="container-md  pt-2">
        <Banner />
        <LoadList />
      </div>
    </div>
  )
}