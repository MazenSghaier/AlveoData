import React from "react";
import { Container, Row, Col } from "reactstrap";
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
      <Container >
        <Row className="text-center flex flex-col md:flex-row">
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature px-4">
                <div className="icon">
                  <item.icon size={50} color="rgb(6 182 212)"/>
                </div>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
