import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
  const search="aaaa";
 const pageSize = 24;
 const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  // state = {
  //   progress: 0
  // }
  const setProgressf = (progress) => {
    setProgress(progress)
    // setState({ progress: progress })
  }
  
    
    return (
      <>
        <Router>
          <Navbar  />
          <LoadingBar
            color='#f11946'
            progress={progress}
            height="3px"
          />
          <Switch>
            <Route exact path="/"><News search={search} apiKey={apiKey} setProgress={setProgressf} key="1" pageSize={pageSize} country="in" category="general" /></Route>
            <Route exact path="/sports"><News search={search} apiKey={apiKey} setProgress={setProgressf} key="2" pageSize={pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News search={search} apiKey={apiKey} setProgress={setProgressf} key="3" pageSize={pageSize} country="in" category="technology" /></Route>
            <Route exact path="/business"><News search={search} apiKey={apiKey} setProgress={setProgressf} key="4" pageSize={pageSize} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News search={search} apiKey={apiKey} setProgress={setProgressf} key="5" pageSize={pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News search={search} apiKey={apiKey} setProgress={setProgressf} key="6" pageSize={pageSize} country="in" category="general" /></Route>
            <Route exact path="/health"><News search={search} apiKey={apiKey} setProgress={setProgressf} key="7" pageSize={pageSize} country="in" category="health" /></Route>
            <Route exact path="/science"><News search={search} apiKey={apiKey} setProgress={setProgressf} key="8" pageSize={pageSize} country="in" category="science" /></Route>

          </Switch>
        </Router>

      </>
    )
  
}


export default App



// import React, { Component} from 'react'
// import Navbar from './Components/Navbar'
// import News from './Components/News'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route

// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {
//   pageSize = 24;
//   apiKey = process.env.REACT_APP_NEWS_API
//   state = {
//     progress: 0
//   }
//   setProgress = (progress) => {
//     setState({ progress: progress })
//   }
//   render() {
    
//     return (
//       <>
//         <Router>
//           <Navbar  />
//           <LoadingBar
//             color='#f11946'
//             progress={progress}
//             height="3px"
//           />
//           <Switch>
//             <Route exact path="/"><News search={search} apiKey={apiKey} setProgress={setProgress} key="1" pageSize={pageSize} country="in" category="general" /></Route>
//             <Route exact path="/sports"><News search={search} apiKey={apiKey} setProgress={setProgress} key="2" pageSize={pageSize} country="in" category="sports" /></Route>
//             <Route exact path="/technology"><News search={search} apiKey={apiKey} setProgress={setProgress} key="3" pageSize={pageSize} country="in" category="technology" /></Route>
//             <Route exact path="/business"><News search={search} apiKey={apiKey} setProgress={setProgress} key="4" pageSize={pageSize} country="in" category="business" /></Route>
//             <Route exact path="/entertainment"><News search={search} apiKey={apiKey} setProgress={setProgress} key="5" pageSize={pageSize} country="in" category="entertainment" /></Route>
//             <Route exact path="/general"><News search={search} apiKey={apiKey} setProgress={setProgress} key="6" pageSize={pageSize} country="in" category="general" /></Route>
//             <Route exact path="/health"><News search={search} apiKey={apiKey} setProgress={setProgress} key="7" pageSize={pageSize} country="in" category="health" /></Route>
//             <Route exact path="/science"><News search={search} apiKey={apiKey} setProgress={setProgress} key="8" pageSize={pageSize} country="in" category="science" /></Route>

//           </Switch>
//         </Router>

//       </>
//     )
//   }
// }






