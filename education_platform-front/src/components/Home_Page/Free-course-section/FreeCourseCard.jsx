import React, { forwardRef } from "react";
import { RiUserLine, RiStarFill } from "react-icons/ri";

const FreeCourseCard = forwardRef(({ item, shouldAnimate }, ref) => {
  const { imgUrl, title, students, rating } = item;

  return (
    <div
      className={`single__free__course ${shouldAnimate ? "show-card" : ""}`}
      ref={ref}
    >
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
});

export default FreeCourseCard;
