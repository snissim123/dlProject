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
              We have made a skin cancer diagnosis tool that classifies different skin lesions 
              as specific types of malignant and benign cancers (i.e. melanoma, moles, warts, 
              etc.). Specifically, we classify between melanoma, melanocytic nevi, dermatofibroma, 
              actinic keratoses, vascular lesions (i.e. angiomas, angiokeratomas, pyogenic granulomas, 
              hemorrhage), squamous cell carcinoma, pigmented benign keratoses (i.e. noncancerous UV 
              damage), and basal cell carcinoma. This is an interesting problem because skin cancer is 
              one of the most prevalent types of cancer. According to the World Health Organization, 
              one in every three cancers diagnosed each year is skin cancer and one in five people are 
              diagnosed throughout their life. An early diagnosis has a 98% survival rate; once the cancer 
              reaches the lymphatics the survival rate drops to 62% and once metastasized, down to a mere 
              16%. As such, skin cancer is a deadly disease which impacts many people. Lesions are easy to 
              ignore as they seem trivial; having such a classification tool could drastically assist in 
              catching skin cancers early and thus improve survival rates. The goal of this model is to 
              classify various lesions as a means of helping a user to determine whether any given lesion 
              is malignant or benign. 
            </p>
            <p>
              The work presented in this paper primarily focused on two convolutional neural networks: 
              AlexNet and ResNet152. We analyzed and compared the results from the models in 
              terms of accuracy and efficiency. Each neural network took in a 224x264 pixel photo as input; 
              the models output a classification from those aforementioned. In the experimentation phase, 
              we created models with various optimization criterion and losses in addition to various 
              parameters as an effort to finding the most successful results. Ultimately, we chose cross 
              entropy loss and stochastic gradient descent for the majority of our testing. Furthermore, 
              we found most success with a learning rate of 0.001, weight decay of 0.00001, and momentum 
              of 0.9. Our models ran with a batch size of 8 for a total of 100 epochs.
            </p>
            <p>
              In order to train the models, we used the HAM10000 dataset in addition to the GCN dataset, both 
              of which are accessible via the ISIC database, for a total of 22,000 examples. In addition to 
              combining various datasets, we also augmented the inputted images to the model to provide a more 
              diverse dataset. Each image was randomly horizontally flipped with a probability of 0.5, randomly 
              vertically flipped with a probability of 0.5, and randomly cropped to ensure that lesions are found 
              in all locations of an image rather than being concentrated in the center. The images were also 
              normalized upon input. The data was split into training, validation, and testing sets randomly. 
              After training finished, we analyzed the accuracy and loss of the training and validation sets of 
              data plotted against epochs and the overall accuracy and loss of the test set of data. These performance 
              measures were executed twice for each model, once using a top 1 error rate, the traditional rate of 
              misclassification, in addition to broader measures representing the misclassification between benign 
              and malignant lesions (i.e. if a lesion is classified as the wrong type of lesion but it is correctly 
              classified as a malignant or benign type, it will not contribute to the error).
            </p>
            <p>
              In our experiment analyzation process, we found ResNet152 to be much more efficient and accurate than 
              the AlexNet. As such, we further focused on hyper-parameter tuning for the ResNet152 based model. Though
              the AlexNet reached an accuracy of approximately 929924 for the full 8-way classification (i.e. classifying 
              specific types of lesions rather than just benign/malignant), the ResNet152 model for the same type of 
              8-way classification reached an accuracy of 0.795 with loss of 0.56. When analyzing the 
              2-way classification of the same ResNet152 model, we noted an accuracy of 0.84 with loss of 0.285. As is 
              evident in the figures provided, a bit of overfitting occurred towards the end of the 100 epoch runs. 
              Regardless, dermatologists have a diagnostic accuracy of approximately 60%. As such, the results of this 
              model are significant as the model successfully classifies with accuracy significantly higher. 
          </p>
          </div>

          <div style={imageStyle}>
            <figure style={figureLeftStyle}>
              <img src="https://drive.google.com/uc?export=view&id=19W1W50OQTQiZfHV2UA0OXc4_Q0nBd5v1" width="428" height="282" alt=""></img>
              <figcaption>Figure 1: ResNet152 Benign/Malignant 2 Way Classification Accuracy.</figcaption>
            </figure>
            <figure style={figureRightStyle}>
              
              <img src="https://drive.google.com/uc?export=view&id=1T6beGb4JVDuWgQ_BMdgi1bode2CuGN9d" width="428" height="282" alt=""></img>
              <figcaption>Figure 2: ResNet152 8 Way Classification Accuracy.</figcaption>
            </figure>
          </div>
        </div>

        <div>
          <div style={aboutStyle}>
            <p><em><b>Research Paper</b></em></p>
          </div>
        </div>
        <div style={contentStyle}>
          <p>The full abstract detailing the work done is accessible 
            <a style={linkStyle} href="https://external-preview.redd.it/TsqzbXm1bq59S-MvrzDoqxdvUEA9tuTg0q-uhFezXeA.jpg?auto=webp&s=e2773da412916c059f56d47c916b62d92fca4198"> here.</a>
          </p>
        </div>
      </body>
    </div>
  );
}


export default App;
