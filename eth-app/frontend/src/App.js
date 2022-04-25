import logo from './logo.svg';
import './App.css';
import SimpleStorage from './eth/SimpleStorage';
import ContractCaller from './eth/ContractCaller';

function App() {
  return (
    <div className="App">
       {/* <SimpleStorage/> */}
       <ContractCaller/>
    </div>
  );
}

export default App;
