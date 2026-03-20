import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // 👈 import Hero

const App = () => {
  return (
    <div className="min-h-screen text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="pt-24 px-6">
        <Hero /> {/* 👈 add Hero here */}
      </main>

    </div>
  );
};

export default App;