import Image from "next/image"
import bannerPic from '@/media/images/banner.png'

export default function Banner() {
    return (
        <div className="w-full mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl xxl:max-w-xxl">
            <div className="h-96">
                <Image
                    src={bannerPic}
                    alt="bannerPic"
                    placeholder="blur"
                />
                <div className="w-full h-full top-0 left-0 bg-gradient-to-t from-blue-900"></div>
                <div>
                    <h2>Hello World</h2>
                    <p>just doing something...</p>
                </div>
            </div>
        </div>
    )
}