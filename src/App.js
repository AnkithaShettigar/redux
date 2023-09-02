import './App.css';
// import Employee from './component/props/Employee';
// import User from './component/props/User';
import HeaderContainer from './containers/HeaderContainer';
import HomeContainer from './containers/HomeContainer';
function App() {
  return (
    <div className="App">
      {/* <User
        data={{ name: 'Ankitha', Age: 25, Role: 'Associate Software Engineer' }}
      />
      <Employee details={{ id: 1, shift: 'day', job: 'maintainance' }} /> */}
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
