import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    //fecth info
    const fecthData = async () => {
      const query = '*[_type == "abouts"]';
      const data = await client.fetch(query);

      setAbouts(data);
    };

    fecthData();
  }, []);

  return (
    <>
      <h2 className="head-text">
        I believe that <span>Life is</span>
        <br />a lifelong <span>Learning</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
