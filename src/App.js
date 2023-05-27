import logo from './logo.svg';
import './App.css';
import './components/Greetings';
import Greetings from './components/Greetings';
import Introduction from './components/Introduction';
import Button from './components/Button';

function App() {
  const myname = 'David';
  const title = <h3>Welcome to GoMycode</h3>;
  const fruits = ['apple', 'banana', 'orange', 'grape', 'blueberry'];
  const myFruitList = fruits.map((fruit, index) => (
    <li key={index}>This is {fruit}</li>
  ));

  //handle signup button
  const handleNext = () =>{
    alert('NEXT button clicked');
  }
  //handle login button
  const handlePrevious = () =>{
    alert('PREVIOUS button clicked');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>{myname} is a React developer {5+5}</h1>
        {title}

        <ul>
        {fruits.map((fruit, index) => (
          <li key = {index}>This is {fruit}</li>
        ))}
        </ul>
        <Greetings username= 'David' message= 'The greatest catalogue'/>
        <br/>
        <div>
        <Button bgcolor='yellow' color='white' handleEvent={handleNext}>Next</Button>
        <br />
        <Button bgcolor='red' color='white' handleEvent={handlePrevious}>previous</Button>
        </div>

        //event handler 


        <Greetings username= 'Glory' message= 'I M A JAVASCRIPT DEVELOPER'/>

        <Greetings  message= 'i am a java programmer'/>

        <Introduction name = 'Richard' age= '26' city='Anambra'/>
        <Introduction name = 'Divine' age= '13' city='Lagos'/>
        <Introduction name = 'kwesi' age= '40' city='Abuja'/>

        

        <ol>
          {myFruitList}
        </ol>
        
      </header>
    </div>
  );
}

export default App;
