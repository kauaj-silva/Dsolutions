import Footer from './assets/components/footer'
import Header from './assets/components/header'
import './App.css'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <div className='App'>
      <Header />
      <main className='container'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App
