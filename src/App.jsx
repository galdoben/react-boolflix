import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Main from './components/Main'
import { GlobalProvider } from './content/GlobalContext'
import Card from './components/Card'



function App() {


  return (
    <>
      <GlobalProvider>
        <Header />
        <Main />
      </GlobalProvider>

    </>
  )
}

export default App
