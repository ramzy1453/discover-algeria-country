import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { FaGithubSquare, FaYoutubeSquare } from "react-icons/fa";
import classes from "../../assets/styles/footer.module.css";
import logo from "../../assets/algeria.png";
import WeatherCard from "./WeatherCard";

export default function Footer() {
  return (
    <div className="flex py-12 px-10 space-x-8 border relative mt-48">
      <div className="flex flex-col space-y-7 flex-[2]">
        {/* Logo */}
        <div className="flex items-center">
          <img alt="algeria logo" src={logo} width="64px" height="64px" />
          <span className="text-2xl text-gray-900 font-semibold ml-4">
            Discover Algeria
          </span>
        </div>

        {/* ul container  */}
        <div className="flex flex-col justify-around space-y-5 lg:space-y-0 lg:flex-row">
          <ul>
            <li className="font-bold">Work with us</li>
            {links.map(([text, path], key) => (
              <Link to={path} key={key}>
                <li className="hover:text-gray-600 my-1">{text}</li>
              </Link>
            ))}
          </ul>
          <ul>
            <li className="font-bold">Connect</li>
            <ul className="flex">
              {socials.map(([Icon, path, color, code], key) => (
                <a className="mr-6 my-2" href={path as string} key={key}>
                  <li>
                    <Icon
                      color={color as string}
                      size={24}
                      className={`${classes.icon} ${classes[code as string]}`}
                    />
                  </li>
                </a>
              ))}
            </ul>
          </ul>
        </div>
      </div>
      <div className="flex-[3]">
        <WeatherCard />
      </div>
    </div>
  );
}

const links = [
  ["Business Events", "/"],
  ["Media", "/"],
  ["Travel Trade", "/"],
];

const socials = [
  [
    AiFillFacebook,
    "https://www.facebook.com/profile.php?id=100080514721686",
    "#3B5998",
    "fb",
  ],
  [
    FaGithubSquare,
    "https://github.com/ramzy1453/holy-quran-website",
    "#333",
    "gt",
  ],
  [
    FaYoutubeSquare,
    "https://www.youtube.com/watch?v=EskulLuwaGA",
    "#FF0000",
    "yt",
  ],
  [
    BsLinkedin,
    "https://www.linkedin.com/in/ramzy-kemmoun-1a3725237/",
    "#007BB5",
    "ld",
  ],
];
