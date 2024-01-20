import '../styles/home.css'
import Examples from './Examples';
import { Link } from 'react-router-dom';
import TypingAnimation from './TypingAnimation';
import BeautifulButton from './BeautifulButton';
import homechart from '../assets/homechart.png'
import image1 from '../assets/icons8-combo-chart-100.png'
import image2 from '../assets/icons8-struggle-64.png'
import image3 from '../assets/icons8-sigma-96.png'
import image4 from '../assets/icons8-time-80.png'

const HomePage = () => {

  return (
    <div id='home-div'>
      <div id='first-half'>
        <div>
          <h1 id='heading'>Glimplse</h1>
          <div id="intro-container">
            <div id='descript-container'>
            <TypingAnimation />
            <p id="descript-text">
        Unlock the potential of your data with this innovative platform. Effortlessly transform tables into
        vibrant charts and graphs, gaining valuable insights at a glance. Perform statistical operations such
        as mean, median, and variance with ease, taking your data analysis to the next level at a glance.
         </p>
         <Link to='/spreadsheet'><BeautifulButton /></Link>
            </div>
            <div id='image-container'>
              <img src={homechart} id='image'/>
            </div>
          </div>
        </div>
      </div>
      <div id='second-half'>
        <div id='example-holder'>
        <Examples imageUrl={image1} 
        heading='Data Visualization' paragraph='Turn tables into visually engaging charts and graphs'
        />
        <Examples imageUrl={image2}
        heading='User-Friendly Interface' paragraph='Effortlessly transform tables into
        vibrant charts and graphs'
        />
        <Examples imageUrl={image3} heading='Statistical Operations'
         paragraph='Perform simple mathematical operations like mean, median, and variance.'/>
        <Examples imageUrl={image4} heading='Instant Insights'
        paragraph='Quickly interpret data patterns for informed decision-making'
        />
        </div>
      </div>
  </div>
    );
};

export default HomePage;
