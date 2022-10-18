import Link from "./Link";
import logo from "../../assets/algeria.png";

export default function StaticNavbar() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:space-x-12 justify-between h-15">
      <a href="#main">
        <div className="flex items-center">
          <img alt="algeria logo" src={logo} width="64px" height="64px" />
          <span className="text-2xl font-semibold ml-4">Discover Algeria</span>
        </div>
      </a>
      <div className="flex space-x-3">
        <Link text="Places to go" section="main" />
        <Link text="Things to do" section="inspirations" />
        <Link text="About Algeria" section="about" />
      </div>
    </div>
  );
}
