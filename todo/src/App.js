import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; // React BootstrapのButtonコンポーネントをインポート
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';

function BasicExample() {
  const [contents, setContents] = useState([]);
  const [showModal, setShowModal] = useState(false); //初期状態を非表示にしておく
  const [selectedContentId, setSelectedContentId] = useState(null);
  const [editedText, setEditedText] = useState(''); // フォームの状態を管理

  // 新規追加ボタンクリック時の動作
  // オブジェクトはidとcontentプロパティ。idは一意の識別子として使用
  const onClickAdd = () => {
    const id = Date.now();  // 一意のIDを生成
    console.log(id);
    const newContent = {
      id,
      content: (
        <div style={{ margin: '0 auto', display: 'flex', borderTop: '1px solid #000', alignItems: 'center' }} key={id}>
          <div style={{ padding: '10px' }}>
            <p style={{ margin: 0 }}>samples samples samples</p>
          </div>
          <div style={{ padding: '10px 10px 10px 380px', textAlign: 'right' }}>
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
    setContents([...contents, newContent]); //setContentsを更新
  };

  // 指定行をidにて判断しを削除
  const handleDelete = (id) => {
    setContents(prevContents => prevContents.filter(content => content.id !== id));
    console.log(id); // 削除する行の情報を取得
  };

  // 編集ボタンクリック時の動作
  const handleEdit = (id, currentText) => {
    setSelectedContentId(id); // 編集対象のコンテンツIDをセット
    setEditedText(currentText); // 現在のテキストをフォームにセット
    setShowModal(true); // モーダルを表示
  };

  // モーダルを閉じる
  const handleClose = () => setShowModal(false);

  // 編集内容を保存
  const handleSave = () => {
    //map関数でprevContentを新しく置き換え
    setContents(prevContents =>
      prevContents.map(content => 
        //contentのidとselectedContentId（編集対象id）が一致してるかチェック。一致（true）ならcontentを更新
        content.id === selectedContentId //
          ? {
            ...content,
            content: (
              <div style={{ position: 'relative', margin: '0 auto', display: 'flex', borderTop: '1px solid #000', alignItems: 'center' }} key={content.id}>
                <div style={{ padding: '10px', flexGrow: 1 }}>
                  <p style={{ margin: 0 }}>{editedText}</p> {/* 編集されたテキストを表示 */}
                </div>
                <div style={{ position: 'absolute', right: '10px', top: '10px' }}>
                  <Button variant="primary" size="sm" onClick={() => handleEdit(content.id, editedText)}>
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
    setShowModal(false); // モーダルを閉じる
  };

  return (
    <section>
      <Navbar style={{ width: '700px', margin: '0 auto' }} expand="lg" className="bg-body-tertiary">
        <Container style={{ height: '70px', backgroundColor: '#66ccff' }}>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
      <div style={{ paddingTop: '10px', paddingLeft: '20px', paddingBottom: '10px', marginBottom: '20px', width: '700px', margin: '0 auto', textAlign: 'right' }}>
        <Button onClick={onClickAdd} variant="info" >新規追加</Button>
      </div>

      <div style={{ margin: '0 auto', border: '1px solid #000', borderRadius: '5px', width: '700px', overflow: 'hidden' }}>
        <div style={{ padding: '10px', backgroundColor: '#f5f5f5' }}>Todos</div>

        {contents.map((content) => (
          <div key={content.id}>
            {content.content}
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>編集</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)} // onChangeでテキストを更新
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            閉じる
          </Button>
          <Button variant="primary" onClick={handleSave}>
            保存
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default BasicExample;