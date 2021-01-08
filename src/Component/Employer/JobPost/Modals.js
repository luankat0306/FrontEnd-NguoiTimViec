import React, { useState } from "react";
import { Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";

export function JobPosting() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Đăng Tin Công Việc
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Đăng Tin Công Việc</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Tiêu Đề</Form.Label>
              <InputGroup className="mb-3">
                <FormControl type="input" placeholder="" />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Vị Trí Tuyển Dụng</Form.Label>
              <Form.Control type="input" placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Ngành Nghề</Form.Label>
              <Form.Control as="select">
                <option>Chọn Ngành Nghề</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Tỉnh Thành</Form.Label>
              <Form.Control as="select">
                <option>Chọn Tỉnh Thành</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Số Lượng</Form.Label>
              <Form.Control type="input" placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Mức Lương</Form.Label>
              <InputGroup className="mb-3">
                <FormControl type="text" />
                <Form.Control as="select">
                  <option>Chọn Đơn Vị Tiền Tệ</option>
                </Form.Control>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Hạn Nộp</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mô Tả Công Việc</Form.Label>
              <Form.Control as="textarea" rows={10} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Đăng Tin
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
