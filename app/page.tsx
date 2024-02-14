import Image from "next/image";

import Nav from "./component/Nav";
import Landing from "./component/Landing";
import Experience from "./component/Experience";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Landing/>
      <Experience/>
    </div>
  );
}
