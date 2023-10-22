import React from "react";

function Footer({ socialMedias }) {
  return (
    <div>
      <h2>This is Footer Page</h2>
      <ul>
        {socialMedias.map((item, i) => {
          return (
            <li key={i.toString()}>
              <a href="">{item}</a>
            </li>
          );
        })}
      </ul>
      <p>All right reserved by Me &copy; 2023</p>
    </div>
  );
}

export default Footer;
