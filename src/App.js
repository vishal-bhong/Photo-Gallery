import react, { useState, useEffect } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import ResponsiveNavbar from './components/SideNavbar';

function App() {
  const [images,setImage] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&
            image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data =>{
      setImage(data.hits);
      setIsloading(false);
    })     
    .catch(err => console.log(err))
  })
  return (
    <div className="flex flex-row">
        <div className="h-screen z-10">
          <Router>
            <ResponsiveNavbar />
            <Routes>
              <Route path='/' />
            </Routes>
          </Router>
        </div>
      
        <div className="pt-10 z-0">
          <ImageSearch searchText={(text) => setTerm(text)} />
          {!isloading && images.length === 0 && <h1 className="text-6xl pl-96 
          mt-36 font-bold text-gray-500">No Images found !</h1>}

          {isloading ? <h1 className="text-6xl text-center mt-32 pl-96">Loding ....</h1> :
          <div className="grid grid-cols-4 gap-5 pl-4">
            {images.map(image => (
            <ImageCard key={image.id} image={image} />
            ))}
          </div>}
     
        </div>
  </div>
  );
}

export default App;
