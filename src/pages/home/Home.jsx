import Announcement from '../../component/Announcement'
import Navbar from '../../component/Navbar'
import Slider from '../../component/Slider'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Announcement />
       <Navbar />
       <Slider />
        </div>
  )
}

export default Home