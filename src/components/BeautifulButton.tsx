import '../styles/beautifulbtn.css'

const BeautifulButton = (props) => {

  return (
    <button className='button-started' >
      {props.value ? props.value: 'Get Started'}
    </button>
  );
};

export default BeautifulButton;
