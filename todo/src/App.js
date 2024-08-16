import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';

function BasicExample() {
  const [contents, setContents] = useState([]); //todoのコンテンツを管理
  const [showModal, setShowModal] = useState(false); //モーダル初期状態を非表示にしておく
  const [selectedContentId, setSelectedContentId] = useState(null); //編集ボタンクリック時のidを管理
  const [editedText, setEditedText] = useState(''); // フォームの状態を管理
  const [addText, setAddText] = useState(''); //新規ボタンクリック時のテキストの値を管理
  const [isSaveButtonVisible, setIsSaveButtonVisible] = useState(true); // 保存ボタンの表示状態を管理

  // 新規追加ボタンクリック時の動作
  const onClickAdd = () => {
    if (addText === "") return;
    const id = Date.now();  // 一意のIDを生成
    const newContent = {
      id,
      content: (
        <div style={{ position: 'relative', margin: '0 auto', display: 'flex', borderTop: '1px solid #000', alignItems: 'center' }} key={id}>
          <div style={{ padding: '10px', flexGrow: 1 }}>
            <p style={{ margin: 0 }}>{addText}</p>
          </div>
          <div style={{ position: 'absolute', right: '10px', top: '10px' }}>
            <Button variant="primary" size="sm" onClick={() => handleEdit(id)}>
              編集
            </Button>{' '}
            <Button onClick={() => handleDelete(id)} variant="danger" size="sm">
              削除
            </Button>
          </div>
        </div>
      )
    };
    setContents([...contents, newContent]);
    setAddText('');
  };

  // 指定行をidにて判断しを削除
  const handleDelete = (id) => {
    setContents(prevContents => prevContents.filter(content => content.id !== id));
  };

  // 編集ボタンクリック時の動作
  const handleEdit = (id) => {
    setSelectedContentId(id); // 編集対象のコンテンツIDをセット
    setEditedText(addText); // 現在のテキストをフォームにセット
    setIsSaveButtonVisible(true); // 初期状態でボタンの表示状態を設定
    setShowModal(true); // モーダルを表示
  };

  // モーダルを閉じる
  const handleClose = () => setShowModal(false);

  // 編集内容を保存
  const handleSave = () => {
    if (editedText === "") {
      alert("文字を入力してください");
      // ボタンを非表示にする
      setIsSaveButtonVisible(false); 
      return;
    }
    setContents(prevContents =>
      prevContents.map(content =>
        content.id === selectedContentId
          ? {
            ...content,
            content: (
              <div style={{ position: 'relative', margin: '0 auto', display: 'flex', borderTop: '1px solid #000', alignItems: 'center' }} key={content.id}>
                <div style={{ padding: '10px', flexGrow: 1 }}>
                  <p style={{ margin: 0 }}>{editedText}</p>
                </div>
                <div style={{ position: 'absolute', right: '10px', top: '10px' }}>
                  <Button variant="primary" size="sm" onClick={() => handleEdit(content.id)}>
                    編集
                  </Button>{' '}
                  <Button onClick={() => handleDelete(content.id)} variant="danger" size="sm">
                    削除
                  </Button>
                </div>
              </div>
            )
          }
          : content
      )
    );
    setShowModal(false);
  };

  // テキストボックスの入力に応じて保存ボタンの表示状態を更新
  const handleChange = (e) => {
    const newText = e.target.value;
    setEditedText(newText);
    // テキストボックスに値がある場合はボタンを表示
    if (newText !== "") {
      setIsSaveButtonVisible(true); 
    }
  };

  return (
    <section>
      <Navbar style={{ width: '700px', margin: '0 auto' }} expand="lg" className="bg-body-tertiary">
        <Container style={{ height: '70px', backgroundColor: '#66ccff' }}>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
      <div style={{ paddingTop: '10px', paddingBottom: '10px', marginBottom: '20px', width: '700px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <input
          type='text'
          value={addText}
          onChange={(e) => setAddText(e.target.value)}
          style={{ width: '50%', marginRight: '10px' }}
        />
        <Button onClick={onClickAdd} variant="info">新規追加</Button>
      </div>
      <div style={{ margin: '0 auto', border: '1px solid #000', borderRadius: '5px', width: '700px', overflow: 'hidden' }}>
        <div style={{ padding: '10px', backgroundColor: '#f5f5f5' }}>Todos</div>
        {contents.map((content) => (
          <div key={content.id}>
            {content.content}
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>編集</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={editedText}
            //onChangeでテキストを更新
            onChange={handleChange} 
          />
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
    </section>
  );
}

export default BasicExample;
