import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return (

    <>

      <Component {...pageProps} />

      {/* custom footer, for every page of the application */}
      <footer className='fixed bottom-2'>
        This is a custom footer for every page, customize it!!!!
      </footer>

    </>
  )
}

export default MyApp
