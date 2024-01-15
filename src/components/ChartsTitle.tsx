
const ChartsTitle = () => {

  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f4',
  };

  const titleStyle = {
    fontSize: '2em',
    color: '#333',
  };

  const descriptionStyle = {
    fontSize: '1.2em',
    color: '#555',
  };

  return (
    <div style={containerStyle} >
      <h1 style={titleStyle}>
        Transforming Table Data into Visual Insights
      </h1>
      <p style={descriptionStyle}>
        Unlock the power of visual insights by exploring dynamic charts and
        visualizations for your table data. A user-friendly interface that allows
        you to seamlessly transform raw information into actionable
        intelligence. Dive into the world of data visualization and quicken your
        decision-making process.
      </p>
    </div>
  )
}

export default ChartsTitle;
