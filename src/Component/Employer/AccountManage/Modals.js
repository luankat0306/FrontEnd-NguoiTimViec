import React, { useState } from "react";
import { Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";

export function ChangeEmail() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-info" size="sm" onClick={handleShow}>
        Đổi Email
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đổi Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Email Hiện Tại</Form.Label>
              <Form.Control
                plaintext
                readOnly
                defaultValue="email@example.com"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Xác Nhận Mật Khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập Mật Khẩu Hiện Tại"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Email Mới</Form.Label>
              <Form.Control type="email" placeholder="Nhập Email Mới" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Lưu Thay Đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function ChangePassword() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-danger" size="sm" onClick={handleShow}>
        Đổi Mật Khẩu
      </Button>

      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đổi Mật Khẩu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mật Khẩu Hiện Tại</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập Mật Khẩu Hiện Tại"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mật Khẩu Mới</Form.Label>
              <Form.Control type="password" placeholder="Nhập Mật Khẩu Mới" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Xác Nhận Mật Khẩu Mới</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập Lại Mật Khẩu Mới"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Lưu Thay Đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function ChangePersonalInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" size="sm" onClick={handleShow}>
        Thay Đổi Thông Tin Công Ty
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thay Đổi Thông Tin Công Ty</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Địa Chỉ</Form.Label>
              <InputGroup className="mb-3">
                <FormControl type="input" placeholder="Nhập Địa Chỉ" />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Quy Mô Công Ty</Form.Label>
              <Form.Control type="input" placeholder="Nhập Quy Mô Công Ty" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Website</Form.Label>
              <Form.Control type="input" placeholder="Nhập Link Website" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Người Liên Hệ</Form.Label>
              <Form.Control type="input" placeholder="Nhập Tên Người Liên Hệ" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Lưu Thay Đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function ChangeDescription() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-success" size="sm" onClick={handleShow}>
        Chỉnh Sửa Phần Giới Thiệu
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Chỉnh Sửa Phần Giới Thiệu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Giới Thiệu Công Ty</Form.Label>
              <Form.Control as="textarea" rows={10} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Lưu Thay Đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function ChangeAvatar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" size="sm" onClick={handleShow}>
        Đổi Ảnh Đại Diện
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đổi Ảnh Đại Diện</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.File
                accept="image/*"
                id="exampleFormControlFile1"
                label="Chọn Ảnh Đại Diện"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Lưu Thay Đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export function ChangeCover() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" size="sm" onClick={handleShow}>
        Đổi Ảnh Bìa
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đổi Ảnh Bìa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.File
                accept="image/*"
                id="exampleFormControlFile1"
                label="Chọn Ảnh Bìa"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Lưu Thay Đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
