import bannerPic from '@/media/images/banner.png'

export default function Banner() {
    return (
        <div className="w-full mx-auto md:max-w-md lg:max-w-lg xl:max-w-xl xxl:max-w-xxl">
            <div className="relative h-96 bg-cover bg-center" style={{backgroundImage: `url(${bannerPic.src})`}}>
                <div className="w-2/4 p-8 flex flex-col h-full justify-evenly">
                    <h2>Hello World</h2>
                    <p>just doing something...</p>
                </div>
            </div>
        </div>
    )
}