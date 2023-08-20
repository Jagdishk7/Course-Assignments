import './app.css';
import Button from './components/Button';
import Header from './components/Header';
import List from './components/List';
import Person from './components/Person';

const App = () => {
  const handleClick = (e) => {
    alert(`Button text - ${e.target.textContent}`);
  };
  return (
    <>
      {/* Task 1 ----------------------------- */}
      <p>Task - 1</p>
      <div>
        <Person name={'Hitesh Choudhary'} age={35} />
        <Person name={'Anurag Tiwari'} age={30} />
      </div>
      <hr />
      {/* Task 2 ----------------------------- */}
      <div>
        <Button text="I'm the task 2" onClick={handleClick} />
        <Button text="I'm the task 2 copy" onClick={handleClick} />
      </div>
      <hr />

      {/* Task 3 ----------------------------- */}
      <div>
        <Header title={"I'm the task 3 "} />
        <Header title={'Now the task 3 is completed'} />
      </div>
      <hr />

      {/* Task 4 ----------------------------- */}
      <ul>
        <List item={'Task'} />
        <List item={'4'} />
        <List item={'Completed'} />
      </ul>
    </>
  );
};

export default App;
