import Image from 'next/image'
import { useEffect, useState } from "react";
import { LightBox } from 'react-lightbox-pack'; // <--- Importing LightBox Pack
import "react-lightbox-pack/dist/index.css";

 

function Gallery(){

    const [data, setData ] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const [toggle, setToggle] =  useState(false);
	const [sIndex, setSIndex] =  useState(0);

	// Handler
	const  lightBoxHandler  = (state, sIndex) => {
		setToggle(state);
		setSIndex(sIndex);
	};

    useEffect(() => {

        setIsLoading(true)
        fetch('https://admin.topazstone.ca/galleries')
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

    const imageData = data.map((item, index) =>  {
        
        return { id: item.id, image: `https://admin.topazstone.ca${item.Image.url}`, title: item.Title, smallImg: `https://admin.topazstone.ca${item.Image.formats.thumbnail.url}`}

    });



    return (
        <>
            <div className="banner-section gallery">
                <div className="container">
                    <h2>Gallery</h2>
                </div>
            </div>

            <div className="gallery-sections">
                <ul>
                    {imageData.map((item, index) => 

                        <li key={item.id} onClick={() => {
                            lightBoxHandler(true, index);
                            }}>
                            <h3>{item.title}</h3>
                            <Image src={item.image} placeholder="blur" blurDataURL={item.smallImg} alt={item.title} width={582} height={322} />
                        </li>    
                    
                    )}
                    
                    
                </ul>
            </div>
            <LightBox
				state={toggle}
                event={lightBoxHandler}
                data={imageData}
                imageWidth="80vw"
                imageHeight="80vh"
                thumbnailHeight={50}
                thumbnailWidth={50}
                setImageIndex={setSIndex}
                imageIndex={sIndex}
            />
        </>
    )
}

export default Gallery;