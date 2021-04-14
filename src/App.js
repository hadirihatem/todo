import './App.css';
import Todoinput from './Todoinput';
import Todolist from './Todolist';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App my-4">
        <Todoinput/>
        <Todolist/>
    </div>
  );
}

export default App;
