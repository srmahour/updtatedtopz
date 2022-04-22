import Head from 'next/head'
import Footer from "../component/footer"
import Header from "../component/header"
import Productbanner from "../component/productbanner"
import Productimage from "../component/productimage"
import React, { useState, useEffect } from 'react';


function Productpage({metaData}) {

  const productMeta = metaData.find( (item) =>  item.Page == 'Quartz stone collection' ? item : null )

  const [ data, setData ] = useState()
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
      setIsLoading(true)
      fetch('https://admin.topazstone.ca/product-banner')
          .then(response => response.json())
          .then(data => {
              setData(data)
              setIsLoading(false)
          })
  }, [])
  if (isLoading) {
      return <p>Loading....</p>
  }
  if (!data) {
      return <p>No List to show</p>
  }


    return (
      <div className='home-page'>
        <Head>
          <title>{productMeta.Title}</title>
          <meta name="description" content={productMeta.Description} />
          <link rel="icon" href="/fev.ico" />
        </Head>


        <Header/>
          <Productbanner productData={data}/>
          <Productimage />
        <Footer />
      </div>
    )
  }


  export async function getStaticProps(context) {
    const res = await fetch('https://admin.topazstone.ca/meta-tags')
    const metaData = await res.json()
  
    if (!metaData) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { metaData }, // will be passed to the page component as props
    }
  }

  export default Productpage
  