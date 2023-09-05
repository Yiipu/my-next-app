import Image from "next/image"
import bannerPic from '@/../public/banner.png'

export default function Banner() {
    return (
        <div className="container-md">
            <div className="banner relative h-96">
                <Image
                    src={bannerPic}
                    alt="bannerPic"
                    placeholder="blur"
                />
                <div className="absolute w-full h-full top-0 left-0 -z-1 bg-gradient-to-t from-blue-900 bg-transparent"></div>
                <div className="absolute z-1 bg-transparent">
                    <h2>Hello World</h2>
                    <p>just doing something...</p>
                </div>
            </div>
        </div>
    )
}