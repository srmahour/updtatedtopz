import Head from 'next/head'
import Footer from "../component/footer"
import Header from "../component/header"
import Productbanner from "../component/productbanner"
import Productimage from "../component/productimage"
import React, { useState, useEffect } from 'react';


export default function Productpage() {

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
          <title>Gallery Page</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/fev.ico" />
        </Head>


        <Header/>
          <Productbanner productData={data}/>
          <Productimage />
        <Footer />
      </div>
    )
  }
  