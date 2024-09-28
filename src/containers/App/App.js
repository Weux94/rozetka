
import {Button} from '../../components/Button/Button';
import Textarea from '../../components/Textarea/Textarea';
import Link from '../../components/Link/Link';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
        <Button name='Alex' age='28'/>
        <Button name='Yehor' age='30'/>
        <Link link = "www.gmail.com"/>
        <Link link = "www.gmail.com"/>
        <Textarea/>
      </header>
    </div>
  );
}

export default App;
