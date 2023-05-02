import { AppProps } from 'next/app'
import '../styles/index.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return <AnimatePresence mode="wait">
    <motion.div
      key={router.route}
      initial="initialState"
      animate="animateState"
      transition={{ duration: 0.75 }}
      variants={{
        initialState: {
          opacity: 0,
        },
        animateState: {
          opacity: 1,
        },
        exitState: {}
      }}
      className='base-page-size'
    >

      <Component {...pageProps} />
    </motion.div >
  </AnimatePresence>
}

export default MyApp
