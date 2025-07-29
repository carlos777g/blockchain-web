import { BrowserRouter } from 'react-router-dom';
import { MyRoutes } from './routers/routes'
import './styles/App.css'
import styled from 'styled-components';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Sidebar />
          <MyRoutes />
        </Container>
      </BrowserRouter>
    </>
  )
}

const Container = styled.div`
`
export default App;