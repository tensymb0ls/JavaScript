import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { MatchSevice } from "./services/Matches.Service";
import { useEffect } from "react";


function App() {
  // hook 
  useEffect(() => {
    const fetchData = async () => {
      const responce = await MatchSevice.getMatch(1);
      const newData = await responce.data;
      console.log(newData);
    };
    fetchData();
  }, [])
  return (
    // JSX разметка
    <div className="App">
      <Header />
      <Main />
      <Footer />


    </div>
  );
}

export default App;
