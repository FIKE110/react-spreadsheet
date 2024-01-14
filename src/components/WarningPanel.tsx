import '../styles/warning.css'

const WarningPanel = ({message}) => {
  return (
    <div className="warning-panel">
      <p className="warning-message">Warning: Something went wrong! 
      <br /> 
      <br />
      {message}</p>
    </div>
  );
};

export default WarningPanel;
