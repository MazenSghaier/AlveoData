import React from "react";
import { RiUserLine, RiStarFill } from "react-icons/ri";

const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;

  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
        <button className="btn free__btn">Free</button>
      </div>

      <div className="free__course__details">
        <h6>{title}</h6>

        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <span className="icon">
              <RiUserLine />
            </span>{" "}
            {students}k
          </div>

          <div className="d-flex align-items-center">
            <span className="icon">
              <RiStarFill />
            </span>{" "}
            {rating}k
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
