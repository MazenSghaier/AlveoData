import React from "react";

const CourseCard = ({ item, shouldAnimate }) => {
  const { imgUrl, title, lesson, students, rating } = item;

  return (
    <div
      className={`single__course__item${shouldAnimate ? " animate" : ""}`}
    >
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4 text-xl">{title}</h6>

        <div className="details-row">
          <div className="lesson d-flex align-items-center">
            <i className="ri-book-open-line"></i> {lesson} Lessons
          </div>

          <div className="students d-flex align-items-center">
            <i className="ri-user-line"></i> {students}K
          </div>
        </div>

        <div className="details-row">
          <div className="rating d-flex align-items-center">
            <i className="ri-star-fill"></i> {rating}K
          </div>

          <div className="enroll d-flex align-items-center text-cyan-400">
            <a alt="" href="#" className="text-cyan-400"> Enroll Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
