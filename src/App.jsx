import React from 'react'
import './App.css'
import ClickEvent from './ClickEvent'
//import Firstcomponent from './props container/Firstcomponent'
//import Secondcomponent from './props container/Secondcomponent'
//import Thirdcomponent from './props container/Thirdcomponent'
//import Fourthcomponent from './props container/Fourthcomponent'
//import StateMgm from './StateMgm'



//const user={
 // name:"prasanna",
  //city:"ponnuru",
  //district:"guntur",
  //state:"andhrapradesh"
//}

//const example={
  //model:"maruthi",
  //year:2022,
  //dealer:"nixon",
  //color:"red"
//}


/*function App() {
  return (
   <div className='container'>
  <Firstcomponent car={example}/>
  <Secondcomponent car={example}/>
  <Thirdcomponent car={example}/>
  <Fourthcomponent car={example}/>
  <StateMgm/>
  
   </div>
  )
}

export default <App>*/
 
 
 const App = () => {
   return (
     <div>
       <h1>
        welcome to react
        <ClickEvent/>
       </h1>
     </div>
   )
 }
 
 export default App
 