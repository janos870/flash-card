import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../images/flash-on.png"

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 dark:bg-slate-800">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"} className="flex">
          <img src={logo}/>
          <h1 className="font-bold flex justify-center items-center">Flash Card</h1>
        </Link>

        <ul className="flex gap-4">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/profile"}>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt="profile" className="h-7 w-7 rounded-full object-cover" />
            ) : (
              <li>Sign In</li>
            )}     
          </Link>
        </ul>
      </div>
    </header>
  );
}
