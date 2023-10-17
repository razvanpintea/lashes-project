import logo from '../images/logo.jpeg';
import '../styles/Home.css';
import homephoto from '../images/homephoto.jpg';


function Home() {
    return (
        <div className='home' id='home'>
        <div className='home-div'>
            {/* <div className='logo-div'>
            <img src={logo} alt="Logo" className='lashes-logo' />
            </div> */}
            <img src={homephoto} alt="Logo" className='homephoto' />
        </div>
        <br/>

        <p style={{marginTop:'20px'}}>Make an appointment with us and tap into your inner beauty✨</p>
        <br/>

        </div>
    )
}
export default Home;