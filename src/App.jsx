import Header from './components/Header'
import CardContainer from './components/CardContainer'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <Header />
      <CardContainer />
      <Footer />
    </div>
  )
}

export default App
