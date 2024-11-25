import logo from './logo.svg';
import './App.css';
import VerticalNav from './components/VerticalNav';
import CourseGridContainer from './components/CourseGridContainer';

function App() {
  return (
    < div className='App'>
    <div className="VerticalNavComponent">
      <VerticalNav/>
    </div>

    <div className="">
      <CourseGridContainer/>
    </div>

  

    </div>
  );
}

export default App;
