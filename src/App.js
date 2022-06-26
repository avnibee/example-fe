import styled from 'styled-components'

import { Header } from "./Header";


function App() {

  const Wrapper = styled.section`
  height: 40%; 

  `;

  return (
    <div className="App">
    <Wrapper>
    <Header/>
    </Wrapper>
    </div>
  );
}

export default App;
