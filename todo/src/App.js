import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; // React BootstrapのButtonコンポーネントをインポート
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  const [contents, setContents] = useState([]);

  // 新規追加ボタンクリック時の動作
  // オブジェクトはidとcontentプロパティ。idは一意の識別子として使用
  const onClickAdd = () => {
    const id = Date.now();  // 一意のIDを生成
    console.log(id);
    const newContent = {
      id,
      content: (
        <div style={{ margin: '0 auto', display: 'flex', borderTop: '1px solid #000' }} key={id}>
          <div style={{ padding: '10px' }}>
            <p>samples samples samples</p>
          </div>
          <div style={{ padding: '10px 10px 10px 380px', textAlign: 'right' }}>
            <Button variant="primary" size="sm">
              編集
            </Button>{' '}
            <Button onClick={() => handleDelete(id)} variant="danger" size="sm">
              削除
            </Button>
          </div>
        </div>
      )
    };
    //setContentsを更新
    setContents([...contents, newContent]);
  };

  // 指定行をidにて判断しを削除⇨削除する行以降もすべて削除されてしまう
  const handleDelete = (id) => {
    setContents(contents.filter(content => content.id !== id));
    // 削除する行の情報を取得
    console.log(id);
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

      <div style={{ margin: '0 auto', border: '1px solid #000', borderRadius: '5px', width: '700px' }}>
        <div style={{ padding: '10px', backgroundColor: '#f5f5f5' }}>sample</div>

        {contents.map((content) => (
          <div key={content.id}>
            {content.content}
          </div>
        ))}
      </div>
    </section>
  );
}

export default BasicExample;