import './App.css';
import InputField from './components/inputfield';
import MultipleInput from './components/multipleinputfield';
import DifferentInput from './components/diffrentinputs';

function App() {
  return (
    <div className='App' >
      Hello
      <div>
        <header>
          <InputField />
        </header>
        <main>
          <MultipleInput />
        </main>
        <div>
          <DifferentInput />
        </div>
      </div>
    </div>
  )
}
export default App;
