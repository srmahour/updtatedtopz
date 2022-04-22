import Head from 'next/head'
import Banner from '../component/banner'
import Header from '../component/header'
import Footer from '../component/footer'
import Homeabout from '../component/homeaboutsection'
import Homegallery from '../component/homegallerry'
import Homereliable from '../component/homereliable'
import Beinnovative from '../component/beinnovative'
import Homaffordabless from '../component/homeaffordabless'


function Home({data}) {


  const homeMeta = data.find( (item) =>  item.Page == 'Home' ? item : null )

  
  return (
    // <div className={styles.container}>
    <div className='home-page'>
      <Head>
        <title>{homeMeta.Title}</title>
        <meta name="description" content={homeMeta.Description} />
        <link rel="icon" href="/fev.ico" />
      </Head>


      <Header/>
      <Banner />
      <Homeabout/>
      <Homegallery/>
      <Homereliable/>
      <Beinnovative/>
      <Homaffordabless/>
      <Footer />

    </div>
  )

  
}


export async function getStaticProps(context) {
  const res = await fetch('https://admin.topazstone.ca/meta-tags')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}



export default Home