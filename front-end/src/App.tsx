import './App.css'
import TrendingContainer from './pages/trendingPage/TrendingContainer'
import Nav from './components/custom-comp/Nav'
import { Route, Routes } from "react-router-dom";
import GenerateTitlesContainer from './pages/generateTitlesPage/GenerateTitlesContainer';
import TrendingTable from './pages/trendingPage/components/trendingTableSection/TrendingTable';
import TrendingGenres from './pages/trendingPage/components/trendingGenresSection/TrendingGenres';
import GenerateTitlesAi from './pages/generateTitlesPage/components/generateTitlesAiSectin/GenerateTitlesAi';
import GenerateTitlesMostViewed from './pages/generateTitlesPage/components/generateTitlesMostViewedSection/GenerateTitlesMostViewed';
import Home from './pages/homePage/Home';
import Footer from './components/custom-comp/Footer';
import ContactForm from './pages/homePage/componenets/contactFormSection/ContactForm';
import TrendingWelcomeMessage from './pages/trendingPage/components/TrendingWelcomeMessage/TrendingWelcomeMessage';
import GenerateTitlesWelcomeMessage from './pages/generateTitlesPage/components/generateTitlesWelcomeMessage/GenerateTitlesWelcomeMessage';


function App() {

  return (
    // bg-[#f8f7f1]
    <div className="bg-[#fafafabb]  lg:min-h-screen flex flex-col">
      <Nav />
      <div className=" flex flex-col lg:flex-row">

        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path="*" element={<Home />}/>
          <Route path='/trending' element={<TrendingContainer />}>
            <Route index element={<TrendingWelcomeMessage />} />
            <Route path='table' element={<TrendingTable />} />
            <Route path='genres' element={<TrendingGenres />} />
          </Route>
          <Route path='/generate' element={<GenerateTitlesContainer />}>
            <Route index element={<GenerateTitlesWelcomeMessage />} />
            <Route path='ai' element={<GenerateTitlesAi />} />
            <Route path='mostviewed' element={<GenerateTitlesMostViewed />} />
          </Route>
          <Route path='contact' element={<ContactForm />} />


        </Routes>
        

      </div>
      <Footer />
      

    </div>
  )
}

export default App
