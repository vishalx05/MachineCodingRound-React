import React, { useState } from "react";
import "./Accordian.css";
import { ChevronDown,ChevronUp } from "lucide-react";
const Accordian = () => {
  const [accordian, setAccordian] = useState(null);

  const data = [
    {
      header: "HTML",
      content: "HyperText Markup Language",
    },
    {
      header: "CSS",
      content: "Cascading Style Sheets",
    },
    {
      header: "JavaScript",
      content: "A programming language used to make web pages interactive",
    },
    {
      header: "React",
      content: "A JavaScript library for building user interfaces",
    },
    {
      header: "Node.js",
      content: "A JavaScript runtime used for backend development",
    },
    {
      header: "Express.js",
      content:
        "A lightweight Node.js framework for building web servers and APIs",
    },
    {
      header: "MongoDB",
      content:
        "A NoSQL database that stores data in flexible JSON-like documents",
    },
  ];

  const handleClick = (idx) => {

    setAccordian(accordian === idx ? null : idx);

  };
  return (
    <div className="main">
      <div className="acc">
      <h1 style={{fontSize:'50px'}}>Accordian</h1>
        {data.map((item, idx) => (
          <div className="part" key={idx}>
          <div className="arrow-data" onClick={() => handleClick(idx)}>

            <div className="header" >
              {item.header}
            </div>
            <div>
                {
                    accordian===idx ? <ChevronUp /> : <ChevronDown />
                }
            </div>
          </div>
            {accordian === idx && (
              <div>
                <div>{item.content}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
