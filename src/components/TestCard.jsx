import { Card } from "react-bootstrap";

const TestCard = ({ name, text, img, desig }) => {
  return (
    <Card
      style={{
        boxShadow: "0px 52px 34px 0px rgb(0 0 0 / 1%)",
        borderColor: "rgb(0,0,0,0)",
        borderRadius: "8px",
        height: "30rem",
      }}
      className="p-md-2 pt-2 my-md-4 mx-3"
    >
      <div className="img d-flex w-25 pt-sm-5 mx-auto" style={{ gap: "-1rem" }}>
        <img
          className="w-50 display-inline m-auto"
          src="https://images.squarespace-cdn.com/content/v1/5d0d6cd22d0ab20001718440/1563495947656-MA77Z0WIPC0EMPBGELAH/ke17ZwdGBToddI8pDm48kIu1QHqWqYcqSXGQukjVMYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0nTmq4t20SVBEeP1hbZbF3p0qWlzeoQAyZPk2qJaMlJDYnGVeje1wcxYJ6ka56sIZA/image-asset.png"
          alt=""
          style={{}}
        />
        <img
          className="w-50 m-auto display-inline"
          src="https://images.squarespace-cdn.com/content/v1/5d0d6cd22d0ab20001718440/1563495947656-MA77Z0WIPC0EMPBGELAH/ke17ZwdGBToddI8pDm48kIu1QHqWqYcqSXGQukjVMYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0nTmq4t20SVBEeP1hbZbF3p0qWlzeoQAyZPk2qJaMlJDYnGVeje1wcxYJ6ka56sIZA/image-asset.png"
          alt=""
          style={{}}
        />
      </div>
      <Card.Body className="my-md-3 pt-sm-5 mt-5">{text}</Card.Body>

      <Card.Footer style={{ backgroundColor: "white", borderTop: "0px" }}>
        <h6 className="text-gray" style={{ color: "gray" }}>
          {name}
        </h6>
        <h6 className="small">{desig}</h6>
      </Card.Footer>
    </Card>
  );
};

export default TestCard;
