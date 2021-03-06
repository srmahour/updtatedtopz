import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import { useEffect, useState } from "react";

function Banner(){

    const [ banner, setBanner ] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://admin.topazstone.ca/banners')
            .then(response => response.json())
            .then(data => {
                setBanner(data)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) {
        return <Image src={"/placeholder.jpg"}  alt="placeholder" title="placeholder" width={1921} height={862} />
    }
    if (!banner) {
        return <Image src={"/placeholder.jpg"}  alt="placeholder" title="placeholder" width={1921} height={862} />
    }

    return (
        <>
            <Carousel className="slider">
                { banner.map( data => 
                    <div className="slider-inner" key={data.id}>
                        {/* <Image src={`https://admin.topazstone.ca${data.image[0].formats.large.url}`}  placeholder="blur" blurDataURL={`https://admin.topazstone.ca${data.image[0].formats.thumbnail.url}`} alt={data.Title} title={data.title} width={1921} height={862} /> */}
                        <Image src={`https://admin.topazstone.ca${data.image[0].formats.large.url}`}  placeholder="blur" blurDataURL={"/placeholder.jpg"} alt={data.Title} title={data.title} width={1921} height={862} />
                        <div className="dexription-parts">
                            <div className="container flex-class">
                                <h2>{data.Title}</h2>
                                <p>{data.Description}</p>
                            </div>
                         </div>
                    </div>
                )}
            </Carousel>
        </>
    )
}


export default Banner