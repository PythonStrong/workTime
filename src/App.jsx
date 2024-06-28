import { Box } from "@chakra-ui/react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  return (
   <Box px={{md:'80px', base:'10px'}}>
    <Header />
    <Main />  
    <Footer />
   </Box>
  )
}

export default App
