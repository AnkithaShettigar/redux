import './App.css';
import Employee from './component/props/Employee';
import User from './component/props/User';

function App() {
  return (
    <div className="App">
      <User
        data={{ name: 'Ankitha', Age: 25, Role: 'Associate Software Engineer' }}
      />
      <Employee details={{ id: 1, shift: 'day', job: 'maintainance' }} />
    </div>
  );
}

export default App;
