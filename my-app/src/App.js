import './App.css';
import Header from './components/Header';
function App() {
  // const getGreetingMessage = (name) => {
  //   if (name === "Park") return `Hello, ${name}! Learn React`
  //   return `Welcome, ${name}! Learn React`
  // }
  return (
    <div className="App" tabIndex="0">
      <Header title={"Learn React A"}/>
      <Header title={"Lbbbb"}/>
      <Header title={"dsfa React A"}/>

      <input type="checkbox" name="agreement" id="agreement-el">
      </input>
      <label htmlFor="agreement-el">동의</label>
    </div>
  );
}

export default App;
