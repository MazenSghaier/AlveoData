import React from "react";
import { RiStarFill, RiUser2Fill, RiBookOpenFill} from 'react-icons/ri';

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
          <div className="lesson">
            <RiBookOpenFill/> <span className="text-sky-700">{lesson} Lessons</span>
          </div>

          <div className="students ">
            <RiUser2Fill style={{ marginRight: '0.2rem' }} />
            <span className=" text-sky-700">{students}K</span>
          </div>
        </div>

        <div className="details-row">
          <div className="rating">
              <RiStarFill/> <span className="text-sky-700">{rating}K</span>
          </div>

          <div className="enroll text-cyan-400">
            <a alt="" href="/courses" > <span className="text-sky-700">Enroll Now</span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
