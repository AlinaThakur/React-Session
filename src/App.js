import './App.css';
//import Classcounter from './Hooks/Classcounter';
//import ComponentC from './Hooks/ComponentC';
//import HookMouse from './Hooks/HookMouse';
//import UseEffect from './Hooks/UseEffect';
//import FunctionClick from './components/functionClick';
//import UserGreeting from './ConditionalRendering/UserGreeting';
//import EventBind from './EventHandling/EventBind';
//import NameList from './ListRendering/NameList';
//import StyleSheet from './ReactCss/StyleSheet';
//import AnotherForm from './ReactForms/AnotherForm';
//import ControlledForms from './ReactForms/ControlledForms';
//import Forms from './ReactForms/Forms';
//import Textarea from './ReactForms/Textarea';
// import ParentComponent from './MethodAsProps/ParentComponent';
//import Hookswithobject from './Hooks/Hookswithobject';
//import HookwithArrays from './Hooks/HookwithArrays';
//import ReactHook from './Hooks/Reacthooks';
//import Message from './StateManagement/Message';
//import Counter from './components/Counter'
//import LifecycleA from './LifeCycleComponents/LifecycleA';
// import {Routes,Route} from 'react-router-dom'
// import Home from './Navigation/Home';
// import About from './Navigation/About';
// import Contact from './Navigation/Contact';
// import Database from './Navigation/Database';
// import Blog from './Navigation/Blog';
import React from 'react';
import About from './Hooks/About';
import { createContext } from 'react';
import CounterOne from './Hooks/CounterOne';
import ParentComponent from './Hooks/UseCallbackImpl/UseCallback';
import Counter from './Hooks/UseCallbackImpl/Counter';
import PureComp from './PureComponents/PureComp';
import RegularComp from './PureComponents/RegularComp';
import ParentComp from './PureComponents/ParentComp';

// export const UserContaxt =React.createContext();
// export const WebContaxt =React.createContext();


//I will create a hook which is responsible for data flow
export const UserContext = createContext()
function App() {
  return (
     <div className='App'>
      
       <CounterOne/>
       <ParentComponent/>
      
      <UserContext.Provider value={'React Web-Devlopment'}>
        <About/>
      </UserContext.Provider>
      <div>
      <Counter/>
      <PureComp/>
      <RegularComp/>
        <ParentComp/>
      </div>
      {/* <Message/>
    <Counter/> */}
       {/* <FunctionClick/>
      <EventBind/>
    <ParentComponent/>  */}
    {/* <UserGreeting/>
    <NameList/> */}
    {/* <StyleSheet/>
    <Forms/> */}
     {/* <ControlledForms/>  */}
     {/* <Textarea/> */}
    {/* <AnotherForm/>  */}
      {/* <LifecycleA/> */}
      {/* <ReactHook/> */}
       {/* <Hookswithobject/> */}
       {/* <HookwithArrays/>  */}
       {/* <UseEffect/> */}
       {/* <Classcounter/>
       <HookMouse/> */}
       {/* <UserContaxt.Provider value={"Pooja"}>
        <WebContaxt.Provider value={"TechMaster"}>
       <ComponentC/>
       </WebContaxt.Provider>
       </UserContaxt.Provider> */}
       {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="database" element={<Database/>}/>
        <Route path="blog" element={<Blog/>}/>
       </Routes> */}
    </div>
  );
}

export default App;


