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
  lineHeight: .6,
  padding: 30,
}

const leftStyle = {
  float: "left",
  width: "50%"
}

const rightStyle = {
  float: "right",
  width: "50%"
}

const courseStyle = {
  padding: 100,
}

function App() {
  return (
    <div className="App">
      <header style={headerStyle}>
          <p style={titleStyle}>Analyzing the Classification of Skin Lesions Through Convolutional Neural Networks</p>
      </header>
      <body style={subStyle}>
        <div style={leftStyle}>
          <p><b>Jordan Zax</b></p>
          <p>jordanzax2021@u.northwestern.edu</p>
        </div>
        <div style={rightStyle}>
          <p><b>Sandra Nissim</b></p>
          <p>sandranissim2021@u.northwestern.edu</p>
        </div>
        <div style={courseStyle}>
          <p>Professor Bryan Pardo</p>
          <p>Computer Science 396/496: Deep Learning</p>
          <p>Northwestern University</p>
        </div>
      </body>
      

    </div>
  );
}


export default App;
