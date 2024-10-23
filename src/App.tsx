import Header from "./components/Header";
import ListSection from "./components/ListSection";
import AddTaskSection from "./components/AddTaskSection";
import "./style.css"

function App() {

  return (
    
    <div className="body">

      <Header />

        <div className="listSection">

          <div className="inputDiv">


            <AddTaskSection />

          </div>
        </div>
    </div>
    

    

  )
}


export default App
