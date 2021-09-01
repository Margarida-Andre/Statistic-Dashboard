import '../../styles/globals.scss'

//component é cada página do app, page vai passar em cada my app
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
