import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const MemberCard = ({
  member: { name, secondName, photo },
  handelName,
  desc,
}) => {
  return (
    <Card style={{ width: "18rem", margin: "40px 0 40px 0" }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{secondName}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary" onClick={() => handelName(name)}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

MemberCard.propTypes = {
  name: PropTypes.number.isRequired,
  secondName: PropTypes.number.isRequired,
};

MemberCard.defaultProps = {
  desc: "No Data Description",
};
export default MemberCard;
