import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; // React BootstrapのButtonコンポーネントをインポート
import Container from 'react-bootstrap/Container'; // React BootstrapのContainerコンポーネントをインポート
import Navbar from 'react-bootstrap/Navbar'; // React BootstrapのNavbarコンポーネントをインポート
import EditModal from './components/EditModal'; // EditModalコンポーネントをインポート

function BasicExample() {
  const [contents, setContents] = useState([]);
  const [showModal, setShowModal] = useState(false); // モーダル初期状態を非表示にしておく
  const [selectedContentId, setSelectedContentId] = useState(null); // 編集ボタンクリック時のidを管理
  const [editedText, setEditedText] = useState(''); // フォームの状態を管理
  const [addText, setAddText] = useState(''); // 新規ボタンクリック時のテキストの値を管理
  const [isSaveButtonVisible, setIsSaveButtonVisible] = useState(true); // 保存ボタンの表示状態を管理
  const [errorMessage, setErrorMessage] = useState(''); // 新規追加時のエラーメッセージの状態を管理
  const [errorModalMessage, setModalErrorMessage] = useState(''); // 保存時のエラーメッセージの状態を管理

  // 新規追加ボタンクリック時の動作
  const onClickAdd = () => {
    if (addText === "") {
      setErrorMessage('文字が未入力です'); // エラーメッセージを表示
      return;
    }
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
    setErrorMessage(''); // エラーメッセージをクリア
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
    setModalErrorMessage(""); // モーダル内のエラーメッセージをクリア
    setShowModal(true); // モーダルを表示
  };

  // モーダルを閉じる
  const handleClose = () => setShowModal(false);

  // 編集内容を保存
  const handleSave = () => {
    if (editedText === "") {
      setModalErrorMessage('文字が未入力です'); // エラーメッセージを表示
      setIsSaveButtonVisible(false); // ボタンを非表示にする
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
    setModalErrorMessage(''); // エラーメッセージをクリア
  };

  // 新規追加時のテキストボックスの入力に応じてエラーメッセージをクリア
  const handleAddTextChange = (e) => {
    setAddText(e.target.value);
    if (e.target.value !== "") {
      setErrorMessage(''); // テキストボックスに値がある場合はエラーメッセージをクリア
    }
  };


  // テキストボックスの入力に応じて保存ボタンの表示状態を更新
  const handleChange = (e) => {
    const newText = e.target.value;
    setEditedText(newText);
    if (newText !== "") {
      setModalErrorMessage(''); // エラーメッセージをクリア
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
        <div style={{ width: '50%' }}>
          <input
            type='text'
            value={addText}
            onChange={handleAddTextChange} // 新規追加時のテキストボックス変更に応じた処理
            style={{ width: '100%', marginRight: '10px' }}
          />
          {errorMessage && <p style={{ color: 'red', marginTop: '5px' }}>{errorMessage}</p>} {/* エラーメッセージを表示 */}
        </div>
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
      <EditModal
        //モーダルが表示されているかどうかを制御。trueの場合、モーダルが表示され、falseの場合は非表示
        showModal={showModal}
        //モーダルの閉じるボタンが押下時に呼び出し
        handleClose={handleClose}
        //モーダル内のテキストボックスの値を管理
        editedText={editedText}
        //モーダル内のテキストボックスの値が変更された時に呼び出される関数。新しいテキストの値をeditedTextに反映
        handleChange={handleChange}
        //編集内容を保存する関数。保存ボタンがクリックされたと時に呼び出される
        handleSave={handleSave}
        //保存ボタンの表示・非表示を制御。trueの場合、保存ボタンを表示、falseの場合は非表示
        isSaveButtonVisible={isSaveButtonVisible}
        //モーダル内のテキストボックスが未入力の時、エラーメッセージを表示
        errorModalMessage={errorModalMessage}
      />

    </section>
  );
}

export default BasicExample;
