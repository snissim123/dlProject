import logo from './logo.svg';
import './App.css';


const headerStyle = {
  backgroundColor: "#416975",
  padding: 40
};

const titleStyle = {
  color: "#ADCEDE",
  fontSize: "32px",
}

const subStyle = {
  color: "#1B2C36",
  fontSize: "18px",
}


function App() {
  return (
    <div className="App">
      <header style={headerStyle}>
          <p style={titleStyle}>Skin Lesion Classification</p>
      </header>
      <body style={subStyle}>
        <p>Jordan Zax and Sandra Nissim</p>
        <p>jordanzax2021@u.northwestern.edu sandranissim2021@u.northwestern.edu</p>
        <p>Northwestern University</p>
        <p>Computer Science 396/496: Deep Learning</p>
        <p>Professor Bryan Pardo</p>
      </body>
      

    </div>
  );
}


export default App;
