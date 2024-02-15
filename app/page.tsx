import Image from "next/image";

import Nav from "./component/Nav";
import Landing from "./component/Landing";
import Experience from "./component/Experience";
import Project from "./component/Project";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Landing/>
      <Experience/>
      <Project/>
      <Footer/>
    </div>
  );
}
