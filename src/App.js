
import Header from "./components/header";
import Home from "./components/home";

import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
 
    {
      path: "/home",
      element: <Home />,
    },
 
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <>

      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
      {/* <Footer /> */}
    </>
   
  );
}

export default App;
