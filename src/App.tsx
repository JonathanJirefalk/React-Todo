import Header from "./components/Header";
import ListSection from "./components/ListSection";
import "./style.css"

function App() {

  return (
    
    <div>

      <Header />

      <div className="container">
        
        <div className="listSection">

          <div className="inputDiv">

            <ListSection />
            

          </div>
        </div>
      </div>
    </div>
    

    

  )
}


export default App
