import StyledParagraph from './components/styled-paragraph/styledParagraph.js';
import Button from './components/button/button.js'
import './App.css';

function App() {
  return (
    <>
      <StyledParagraph text='mais uma quest finalizada' color='#1f75fe' />

      <Button label='Próximo módulo' myLabel='mylabel'/>
    </>
  );
}

export default App;
