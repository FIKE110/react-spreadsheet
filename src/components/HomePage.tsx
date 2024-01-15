import '../styles/home.css'
import TypingAnimation from './TypingAnimation';

const HomePage = () => {
  return (
    <div id='home-div'>
      <h1> Unleashing Insights through Visualization and Analysis</h1>
      <TypingAnimation />
      <div className="home-container">
      <h1>Welcome to Data Insights!</h1>
      <p>
        Unlock the potential of your data with our innovative platform. Effortlessly transform tables into
        vibrant charts and graphs, gaining valuable insights at a glance. Perform statistical operations such
        as mean, median, and variance with ease, taking your data analysis to the next level.
      </p>

      <h2>Data Visualization Made Simple</h2>
      <p>
        Transform your raw data into dynamic visualizations, revealing trends, patterns, and outliers. Our
        user-friendly tools make data visualization accessible to everyone, regardless of expertise.
      </p>

      <h2>Mathematical Insights at Your Fingertips</h2>
      <p>
        Explore the central tendencies and distribution characteristics of your data. Calculate mean, median,
        and variance effortlessly, gaining instant insights into your dataset's behavior.
      </p>

      <div className="key-features">
        <h2>Key Features</h2>
        <ul>
          <li>Data Visualization: Turn tables into visually engaging charts and graphs.</li>
          <li>Statistical Operations: Calculate mean, median, and variance effortlessly.</li>
          <li>User-Friendly Interface: Intuitive tools for easy navigation and analysis.</li>
          <li>Customization: Tailor visualizations to suit your preferences and needs.</li>
          <li>Instant Insights: Quickly interpret data patterns for informed decision-making.</li>
        </ul>
      </div>
    </div>
    </div>
   
    /* <Container>
      <Content>
        <Title>Transform Tables into Visual Insights!</Title>
        <Description>
          Welcome to our site where you can easily turn tables into beautiful charts and graphs.
        </Description>
        <FeaturesList>
          <FeatureItem>Visualize data with colorful charts and graphs.</FeatureItem>
          <FeatureItem>Perform mathematical operations like mean, median, and variance.</FeatureItem>
          <FeatureItem>Explore the power of data visualization and analytics.</FeatureItem>
        </FeaturesList>
        <Image src="https://i.imgur.com/7jE5lWw.png" alt="Data Visualization" />
      </Content>
  </Container> */
    );
};

export default HomePage;
