import { motion } from 'framer-motion'
import Trending from '../Trending'
import Vegetarian from '../Vegetarian'



const Home = () => {


  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Trending />
        <Vegetarian />
      </motion.div>
    </>
  )
}

export default Home