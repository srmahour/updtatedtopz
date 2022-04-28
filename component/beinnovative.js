import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from "react";

function Beinnovative() {

    const [ data, setData ] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://admin.topazstone.ca/be-innovative')
            .then(response => response.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) {
        return <Image src={"/placeholder.jpg"}  alt="placeholder" title="placeholder" width={1921} height={862} />
    }
    if (!data) {
        return <Image src={"/placeholder.jpg"}  alt="placeholder" title="placeholder" width={1921} height={862} />
    }

     return(
         <>
            <div className="home-section-five">
                <div className="container">
                    <div className="titles">
                        <h3>{data.Title}</h3>
                        <p><Link href="/gallery"><a>View All <Image src="/white-arrow.png" alt='arrow' width={51} height={14}/></a></Link></p>
                    </div>
                    <div className="slider-effect">
                            <div>
                                <div>
                                    <ul data-slick='{"slidesToShow": 2, "slidesToScroll": 2}'>
                                        { data.Images.map( item => 
                                        
                                        <li key={item.id}>
                                            <Image src={`https://admin.topazstone.ca${item.formats.medium.url}`} placeholder="blur" blurDataURL={"/placeholder.jpg"} alt={item.caption} width={440} height={605} />
                                            <h3>{item.caption}</h3>
                                        </li>
                                            
                                        )}
                                        

                                    </ul>
                                </div>
                                
                            </div>
                        <h2>{data.Description}</h2>
                    </div>
                </div>
            </div>
         </>
     )
 }
 
 export default Beinnovative;