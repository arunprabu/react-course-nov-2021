import MyProfile from './components/MyProfile/MyProfile';
import Todo from './components/Todo/Todo';
import UserData from './components/UserData/UserData';

function App() {
  return (
    <div className="container">
      <h1>Welcome to Hooks and Unit Testing!!!</h1>
      <MyProfile/>

      <hr />
      <UserData />

      <hr />
      <Todo />


    </div>
  );
}

export default App;
