import React from "react";
import { Bookmark } from "lucide-react";

const Cards = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src= {props.lo} />
        <button>
          Save <Bookmark size={14} />
        </button>
      </div>

      <div className="center">
        <h3>
          {props.com} <span>{props.post}</span>
        </h3>
        <h2>{props.des}</h2>
        <div className="box">
          <h4>{props.t1}</h4>
          <h4>{props.t2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.loc}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Cards;
