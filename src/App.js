import logo from './logo.svg';
import './App.css';


const headerStyle = {
  backgroundColor: "#3B6275",
  padding: 40
};

const titleStyle = {
  color: "#ADCEDE",
  fontSize: "36px",
}

const subStyle = {
  color: "#1B2C36",
  fontSize: "18px",
  lineHeight: .6,
  padding: 30,
}

const leftStyle = {
  float: "left",
  width: "40%",
  paddingLeft: "5%"
}

const rightStyle = {
  float: "right",
  width: "40%",
  paddingRight: "5%"
}

const courseStyle = {
  paddingTop: 100,
}

const aboutStyle = {
  color: "#61A2C2",
  float: "left",
  fontSize: "32px",
  paddingLeft: "5%",
  paddingTop: 30,
}

const contentStyle = {
  color: "#1B2C36",
  float: "left",
  fontSize: "18px",
  width: "90%",
  textAlign: "left",
  paddingLeft: "5%",
}

const linkStyle = {
  color: "#61A2C2",
}

const imageStyle = {
  justifyContent: "center",
}

const figureLeftStyle = {
  float: "left",
  width: "40%",
}

const figureRightStyle = {
  float: "right",
  width: "40%",
}

function App() {
  return (
    <div className="App">
      <header style={headerStyle}>
        <p style={titleStyle}>Analyzing the Classification of Skin Lesions Through Convolutional Neural Networks</p>
      </header>

      <body>
        <div style={subStyle}>
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

        </div>

        <div>
          <div style={aboutStyle}>
            <p><em><b>About</b></em></p>
          </div>
          <div style={contentStyle}>
            <p>
              We have made a skin cancer diagnosis tool that classifies different skin lesions as
              specific types of malignant and benign cancers (i.e. melanoma, moles, warts, etc.).
              Specifically, we will be classifying between actinic keratoses and intraepithelial
              carcinoma / Bowen's disease, basal cell carcinoma, benign keratosis-like lesions
              (noncancerous UV damage), dermatofibroma, melanoma, melanocytic nevi, and vascular
              lesions such as angiomas, angiokeratomas, pyogenic granulomas and hemorrhage.
          </p>
            <p>
              We created this tool through the use of various convolutional neural networks.
              Our results from a variety of convolutional neural network models were analyzed
              and compared in terms of accuracy and efficiency. Each neural network took in
              a photo as input and the models outputted a classification from those
              aforementioned inputs.
          </p>
            <p>
              This is an interesting problem because skin cancer is one of the most prevalent types
              of cancer. According to the World Health Organization, one in every three cancers
              diagnosed each year is skin cancer and one in five people are diagnosed throughout their
              life.  As such, skin cancer is a deadly disease which impacts many people. Lesions are
              easy to ignore as they seem trivial; having such a classification tool could drastically
              assist in catching skin cancers early and thus improve survival rates. The goal of this
              model is to classify various lesions as a means of helping a user to determine whether
              any given lesion is malignant or benign.
          </p>
            <p>
              Pardo specifically asks for 1) motivate the problem ie what is the thing youre trying to do and why anyone should cancer
              2) describe what youre doing in very high level terms 3) describe how you built/tested ie waht yoru dataset was and how you measured success
              4) descirbe some results ie how well it works in no more than a paragraph
          </p>
          </div>

          <div style={imageStyle}>
            <figure style={figureLeftStyle}>
              <img src="https://www.vulcantermite.com/wp-content/uploads/2015/11/ISS_5169_02663.jpg" width="400" height="400" alt=""></img>
              <figcaption>Figure 1: A cute mole.</figcaption>
            </figure>
            <figure style={figureRightStyle}>
              <img src="https://www.vulcantermite.com/wp-content/uploads/2015/11/ISS_5169_02663.jpg" width="400" height="400" alt=""></img>
              <figcaption>Figure 2: Another cute mole.</figcaption>
            </figure>
          </div>
        </div>

        <div>
          <div style={aboutStyle}>
            <p><em><b>Research Paper</b></em></p>
          </div>
        </div>
        <div style={contentStyle}>
          <p>Full paper detailing work accessible
            <a style={linkStyle} href="https://external-preview.redd.it/TsqzbXm1bq59S-MvrzDoqxdvUEA9tuTg0q-uhFezXeA.jpg?auto=webp&s=e2773da412916c059f56d47c916b62d92fca4198"> here.</a>
          </p>
        </div>
      </body>
    </div>
  );
}


export default App;
