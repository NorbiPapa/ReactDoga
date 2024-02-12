import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LogoComponent from "./Components/Logo";
import PostComponent from "./Components/Post";
import { Comments } from "./Components/Comments";

function App() {
  


  return (
    <div>
      <LogoComponent />
      <PostComponent />
      <Comments />
    </div>
  );
};

export default App;
