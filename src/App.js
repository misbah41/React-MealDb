
// import './App.css';
// import ComponentRecap from './components/Component-Recap';
import MealApp from './themealDb/meal'


import NewsApp from './components/news.jsx';
function App() {
  return (
    <div className="container mt-5">
      {/* <ComponentRecap/> */}
      <MealApp />
      <NewsApp/>
    </div>
  );

}

export default App;
