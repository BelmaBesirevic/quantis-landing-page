import './App.css'
import Container from './components/Container'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main'

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Main />
      </Container>
      <Footer />
    </>
  )
}
export default App
