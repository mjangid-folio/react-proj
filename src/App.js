import logo from './logo.svg';
import './App.css';
import image from "./image.jfif"

const [mostImportantItem] = ["first", "second", "third"]

console.log(mostImportantItem);

function Header(props){
  console.log(props);
  return(
    <header>
      <h1>{props.name} Garden</h1>
    </header>
  )
}

function Main(props){
  return(
    <section>
      <p> This is the website to save the earth</p>
      <img src={image} alt=""/>
      <ul style={{textAlign: "left"}}>
        {props.plants.map((plant) => <li key={plant.id}>{plant.title}</li>)}
      </ul>
    </section>
  )
}

function Footer(props){
  return(
    <h2>
      Thank you! Copyright@{props.year}
    </h2>
  )
}
const plants= [
  "Groot",
  "Areca",
  "Palm"
]

const plantsObject = plants.map((plant, i) => ({id: i, title: plant}))
console.log(plantsObject);
function App() {
  return (
    <div className="App">
      {/* <h1>Header</h1> */}
      <Header name="Earth"/>
      <Main plants={plantsObject}/>
      <Footer year={new Date().getFullYear()}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
