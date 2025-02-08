
import { Form, Button } from "react-bootstrap";

const ReviewForm = ({ handleSubmit, revText, labelText }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="reviewTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control ref={revText} as="textarea" rows={3} />
      </Form.Group>
      <Button variant="outline-info" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;
