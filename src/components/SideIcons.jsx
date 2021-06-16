import { Col, Row } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { IoLogoMedium } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";
import { useEffect, useState } from "react";
import useWindowWidth from "react-hook-use-window-width";
const SideIcons = ({
  direction = "column",
  color = "gray",
  className,
  style,
}) => {
  const width = useWindowWidth();
  if (direction === "column" && width < "700") {
    return <></>;
  }

  return (
    <div className={` flex-${direction} ${className} d-flex`} style={style}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/atishayspeaks/"
      >
        <AiFillLinkedin
          className="social-link m-2 mx-2 my-2"
          color={color}
          size={25}
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/AtishaySpeaks"
      >
        <AiOutlineTwitter
          className="social-link m-2 mx-2 my-2"
          color={color}
          size={25}
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/channel/UClbUR0JkPpwsigg1gwrU4Hg"
      >
        <FaYoutube
          className="social-link m-2 mx-2 my-2"
          color={color}
          size={25}
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://open.spotify.com/show/6ocA2nIJSXP6NLKFKx24uT"
      >
        <FaSpotify
          className="social-link m-2 mx-2 my-2"
          color={color}
          size={25}
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://atishayspeaks.medium.com/"
      >
        <IoLogoMedium
          className="social-link m-2 mx-2 my-2"
          color={color}
          size={25}
        />
      </a>
    </div>
  );
};

export default SideIcons;
