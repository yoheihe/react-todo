import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditModal({
  showModal, 
  handleClose, 
  editedText, 
  handleChange, 
  handleSave, 
  isSaveButtonVisible, 
  errorModalMessage
}) {
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>編集</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <input
            type="text"
            value={editedText}
            onChange={handleChange} // onChangeでテキストを更新
          />
          {errorModalMessage && <p style={{ color: 'red', marginTop: '5px' }}>{errorModalMessage}</p>} {/* エラーメッセージを表示 */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          閉じる
        </Button>
        {isSaveButtonVisible && (
          <Button variant="primary" onClick={handleSave}>
            保存
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
