import './App.css';
import InputField from './components/inputfield';
import MultipleInput from './components/multipleinputfield';

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
      </div>
    </div>
  )
}
export default App;
