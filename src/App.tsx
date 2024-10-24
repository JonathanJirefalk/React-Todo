import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./style.css"

function App() {

  return (
    
    <div className="body">

      <Header />

        <div className="listSection">

          <TaskList />
          
        </div>

    </div>
  )
}


export default App
