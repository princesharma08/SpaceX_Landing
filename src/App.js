import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling
import Banner from './Components/Banner';
import SearchForm from './Components/SearchForm';
import { AppProvider } from './Components/Context';
import Footer from './Components/Footer';

const App = () => {
  return (
      <div className="container mx-auto h-full rounded-lg shadow-2xl bg-cover bg-center relative bg-transparent" style={{ backgroundImage: "url('assets/SpaceX.png')" }}>
        <div className=" text-white mb-2 relative bg-transparent" >
          <Banner />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 relative bg-transparent">
          <AppProvider>
            <div className="p-4 rounded-lg shadow-2xl ">
              <SearchForm />
            </div>
            <div className="container rounded-lg shadow-2xl relative bg-transparent">
              <Footer/>
            </div>
          </AppProvider>
        </div>
      </div>
  );
};

export default App;
