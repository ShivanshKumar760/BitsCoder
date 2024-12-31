import './App.css';
import { Box } from '@chakra-ui/react'
import CodeEditor from './components/CodeEditor'
import logo from "../logo/blitz.png";

function App() {

  return (
    <>
    <header className='header'>
      <img src={logo} alt='code-logo' className='logo'/>
      <h1 className='mainHeading'>Blitz Coder <span className='tag'>A online ide to increase your productivity</span></h1>
    </header>
    <div>
      <Box minH="100vh" bg="#0f0a19"  color="grey.500" px={6} py={8}>
      <CodeEditor />
      </Box>
    </div>

    </>
  )
}

export default App
