import Image from 'next/image'
import { useEffect, useState } from "react";
import { LightBox } from 'react-lightbox-pack'; // <--- Importing LightBox Pack
import "react-lightbox-pack/dist/index.css";

function Homegallery() {

    const [ toDos, setToDos ] = useState()
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
        fetch('https://admin.topazstone.ca/tiles-galleries')
            .then(response => response.json())
            .then(data => {
                setToDos(data)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) {
        return <p>Loading....</p>
    }
    if (!toDos) {
        return <p>No List to show</p>
    }

    const imageData = toDos.map((item, index) =>  {
        
        return { id: item.id, image: `https://admin.topazstone.ca${item.Back.url}`, title: item.Name, mediumImg: `https://admin.topazstone.ca${item.Front.formats.medium.url}`, smallImg: `https://admin.topazstone.ca${item.Front.formats.thumbnail.url}`, description: item.Description}

    });

    return(
        <>
            <div className="home-section-three">
                <div className="container">
                    <div className="main-heading">
                        <h3>Our Topaz brand colors are unique, popular with designers, builders and homeowners alike, and priced like no other brands.</h3>
                    </div>
                </div>

                <div className="lightbox-section">
                    <div className="container">
                        <ul>

                            {imageData.map((item, index) => 

                                <li key={item.id} onClick={() => {
                                    lightBoxHandler(true, index);
                                    }}>
                                    <div className="bg-box">
                                        <Image src={item.mediumImg} placeholder="blur" blurDataURL={item.smallImg} alt={item.title} title={item.title} width={500} height={203} />
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                </li>    

                            )}

                        </ul>
                    </div>
                </div>
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

export default Homegallery;