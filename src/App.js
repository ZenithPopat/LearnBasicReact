import React, { useState } from "react";
import ErrorBoundary from "./components/ErrorComponent";

const BuggyComponent = () => {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error("This is a test error!");
  }

  return (
    <div>
      <h3>Click the button to simulate an error:</h3>
      <button onClick={() => setError(true)}>Cause Error</button>
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}

export default App;

/*-------------------------------------------------------*/

// import React, { Suspense } from "react";

// const LazyComponent = React.lazy(() => import("./components/AutoFocusInput"));

// const App = () => {
//   return (
//     <div className="h-screen flex items-center justify-center">
//       <Suspense fallback={<h2>Loading...</h2>}>
//         <LazyComponent />
//       </Suspense>
//     </div>
//   );
// };

// export default App;

/*-------------------------------------------------------*/
// import React, { useState, useRef } from "react";
// import PortalTooltip from "./components/PortalComponent";

// const App = () => {
//   const [showTooltip, setShowTooltip] = useState(false);
//   const buttonRef = useRef(null); // Reference for positioning tooltip

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">React Portal Tooltip</h1>

//       {/* Button with Tooltip */}
//       <button
//         ref={buttonRef}
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//         onMouseEnter={() => setShowTooltip(true)}
//         onMouseLeave={() => setShowTooltip(false)}
//       >
//         Hover me!
//       </button>

//       {/* Show Tooltip on Hover */}
//       {showTooltip && (
//         <PortalTooltip message="This is custom tooltip!" position="top" targetRef={buttonRef} />
//       )}
//     </div>
//   );
// };

// export default App;



// import React, { useState } from "react";
// import PortalComponent from "./components/PortalComponent";

// const App = () => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">React Portal Example</h1>
//       <button
//         className="px-4 py-2 bg-blue-500 text-white rounded"
//         onClick={() => setShowModal(true)}
//       >
//         Open Modal
//       </button>

//       {showModal && (
//         <PortalComponent>
//           <h2 className="text-xl font-bold">This is a Portal Modal</h2>
//           <button
//             className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
//             onClick={() => setShowModal(false)}
//           >
//             Close
//           </button>
//         </PortalComponent>
//       )}
//     </div>
//   );
// };

// export default App;




/*-------------------------------------------------------*/

// import React from "react";
// import ToggleComponent from "./components/ToggleComponent";
// import WindowSizeComponent from "./components/WindowSizeComponent";
// import AutoFocusInput from "./components/AutoFocusInput";
// import CounterWithPrevState from "./components/CounterWithPrevState";
// import Counter from "./components/UseReducerCounter";
// import ExpensiveComponent from "./components/ExpensiveCalcUseMemo";

// const App = () => {
  // return (
    // <div className="flex items-center justify-center h-screen">
      // <WindowSizeComponent />
      // {/* <ToggleComponent /> */}
      // {/* <ExpensiveComponent /> */}
    // </div>
    // <Counter/>
    // <CounterWithPrevState />
    // <div className="h-screen flex items-center justify-center">
    //   <AutoFocusInput />
    // </div>
  // );
// };

// export default App;


/*

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

return (
    <div className="h-screen flex flex-col items-center justify-center">
      <nav className="mb-6 space-x-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/about" className="text-blue-500">About</Link>
        <Link to="/dashboard" className="text-blue-500">Dashboard</Link>
        <Link to="/login" className="text-blue-500">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );

*/



// import logo from './logo.svg';
// import { useContext } from 'react';
// import Counter from './Counter';
// import NameUpdater from './NameUpdater';
// import Greeting from './Greeting'
// import Header from './components/Header';
// import React from 'react';
// import './App.css';
// import UserForm from './components/UserForm';
// import Message from './Message';
// import { ThemeContext } from './context/ThemeContext';
// import { Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';

// const App = () => {

  // const { theme, toggleTheme } = useContext(ThemeContext);

  // return (
  //   <div className="h-screen flex flex-col items-center justify-center">
  //     <nav className="mb-6 space-x-4">
  //       <Link to="/" className="text-blue-500">Home</Link>
  //       <Link to="/about" className="text-blue-500">About</Link>
  //     </nav>

  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //     </Routes>
  //   </div>

    // <div className={`h-screen flex flex-col items-center justify-center ${
    //   theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
    // }`}>
    //   <h1 className="text-3xl font-bold">Theme: {theme}</h1>
    //   <button
    //     onClick={toggleTheme}
    //     className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    //   >
    //     Toggle Theme
    //   </button>
    // </div>
//   );
// };

// function App() {
//   return (
//     <div className="bg-blue-500 text-white text-2xl font-bold p-5">
//       Tailwind is working!
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <UserForm/>
//     </div>
//   )
// }

// function App() {

//   //useState Hook: initializes counter to 0
//   const defaultUser = { name: "Zenith", age: 20 };
//   const [user, setUser] = useState(defaultUser);
//   const [greeting, setGreeting] = useState("");

//   // Effect: Update the page title when the user name changes
//   useEffect(() => {
//     document.title = `User: ${user.name}`
//   }, [user.name]); // Runs only when 'user.name' changes

//   // Effect 2: Run something when age changes
//   // useEffect(() => {
//   //   console.log(`Age updated to: ${user.age}`);
//   // }, [user.age]); // Runs only when `user.age` change

//   const updateName = (e) => {
//     setUser((prevUser) => ({...prevUser, name: e.target.value}))
//   }

//   const updateAge = (e) => {
//     setUser((prevUser) => ({...prevUser, age: e.target.value}))
//   }

//   const handleGreet = () => {
//     setGreeting(`Hello, ${user.name}!`);
//   }

//   const handleReset = () => {
//     setUser(defaultUser);
//     setGreeting("");
//   }

//   // Dynamic styling for age
//   const ageStyle = {
//     color: user.age >= 18 ? "green" : "red",
//     fontWeight: "bold",
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>User Information</h2>

//       {/* Input field for Name */}
//       <input
//         type="text"
//         value={user.name}
//         onChange={updateName}
//         placeholder="Enter name"
//       />
//       {/* Input field for Age */}
//       <input
//         type="number"
//         value={user.age}
//         onChange={updateAge}
//         placeholder="Enter age"
//       />

//       {/* Display updated name and age */}
//       <p>Name: {user.name}</p>
//       <p style={ageStyle}>Age: {user.age}</p>

//       {/* Greeting Button */}
//       <button onClick={handleGreet}>Greet Me!</button>

//       {/* Display Greeting */}
//       {greeting && <p>{greeting}</p>}

//       <br/><br/>
//       <button onClick={handleReset} disabled={user.name === defaultUser.name && user.age === defaultUser.age}>Reset</button>
//     </div>
//   )
// }


// function App() {

//   //useState Hook: initializes counter to 0
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("Zenith");
//   const [age, setAge] = useState(25);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Name: {name}</h1>
//       <h1>Age: {age}</h1>

//       {/* Input field for Name */}
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter name"
//       />
//       {/* Input field for Age */}
//       <input
//         type="number"
//         value={age}
//         onChange={(e) => setAge(Number(e.target.value))}
//         placeholder="Enter age"
//       />

//       <br/><br/>
//       <button onClick={() => {setName("Zenith"); setAge(20); }}>Reset</button>

//       <h1>Counter: {count}</h1>
//       <button onClick={() => setCount(count+1)}>Increase</button>
//       <button onClick={() => setCount(count-1)}>Decrease</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   )
// }


// function App() {
//   return (
//     <Message name='Zenith' age='25' location='Germay'/>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Counter />
//       <NameUpdater />
//     </div>)
// }

// function App() {
  // return (
  //   <div>
  //     {/* <Header /> */}
  //     <Header title="Zenith's React Portfolio"/>
  //     <Greeting name='Zenith'/>
  //     {/* <Greeting name='Traveller'/> */}
  //     <p>This is my first project.</p>
  //   </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  // );
// }

// export default App;
