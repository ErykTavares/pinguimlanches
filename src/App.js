import { GlobalStyle } from "./style/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/index";


function App() {
  return (
    <main>
      <GlobalStyle />
      <Header />
      <Home/>
      <Footer />
    </main>
  );
}

export default App;
