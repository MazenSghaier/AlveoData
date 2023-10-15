import React from "react";
import { Row, Col } from "reactstrap";
import { RiDraftLine, RiDiscussLine, RiContactsBookLine } from 'react-icons/ri';

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: RiDraftLine,
  },
  {
    title: "All Time Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: RiDiscussLine,
  },
  {
    title: "Certification",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: RiContactsBookLine,
  },
];

const Features = () => {
  return (
    <section>
      <div style={{ display:'flex', alignContent:'center', justifyContent:'center'}}>
     
          <Row className="text-center flex flex-col md:flex-row px-8">
            {FeatureData.map((item, index) => (
              <Col lg="4" md="6" key={index}>
                <div className="single__feature px-8 py-8 flex flex-col items-center justify-center">
                  <div className="icon mb-4">
                    <item.icon size={50} color="rgb(6 182 212)" />
                  </div>
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
      </div>
    </section>
  );
};

export default Features;
