import "@/styles/globals.css";


import NavBar from "@/components/NavBar/NavBar";
import { Footer } from "@/components/componentIndex";

const App = ({ Component, pageProps }) =>
<div>
    <NavBar/>
      {/*<Component {...pageProps} />*/}
    <Footer /> 
</div>

export default App;
