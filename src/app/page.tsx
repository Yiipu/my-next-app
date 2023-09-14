'use client'
import Banner from "@/components/banner"
import LoadList from "@/components/loadlist"

export default function Home() {
  return (
    <div className="container-md">
      <Banner />
      <LoadList />
    </div>
  )
}