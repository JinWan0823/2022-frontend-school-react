import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';

function App() {
  // const getGreetingMessage = (name) => {
  //   if (name === "Park") return `Hello, ${name}! Learn React`
  //   return `Welcome, ${name}! Learn React`
  // }

  const info = {
    firstName :"jinwan",
    lastName :"Park",
    withImg : true
  }

  return (
    <div className="App" tabIndex="0">
      <Header title={"Learn React A"}/>
      <Welcome {...info}/>
    </div>
  );
}

export default App;
