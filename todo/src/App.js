import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート
import Button from 'react-bootstrap/Button'; // React BootstrapのButtonコンポーネントをインポート
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


function BasicExample() {
  return (
    <section>
      <Navbar style={{ width: '700px', margin: '0 auto' }} expand="lg" className="bg-body-tertiary">
        <Container style={{ height: '70px', backgroundColor: '#66ccff' }}>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
      <div style={{ paddingTop: '10px', paddingLeft: '20px', paddingBottom: '10px', marginBottom: '20px', width: '700px', margin: '0 auto', textAlign: 'right' }}>
        <Button variant="info">新規追加</Button>
      </div>

      <div style={{ margin: '0 auto', border: '1px solid #000', borderRadius: '5px', width: '700px' }}>
        <div style={{ padding: '10px', backgroundColor: '#f5f5f5' }}>sample</div>

        <div style={{ margin: '0 auto', display: 'flex', borderTop: '1px solid #000' }}>
          <div style={{ padding: '10px' }}>
            <p1>samples samples samples</p1>
          </div>
          <div style={{ padding: '10px 10px 10px 380px', textAlign: 'right' }}>
            <Button variant="primary" size="sm">
              編集
            </Button>{' '}
            <Button variant="danger" size="sm">
              削除
            </Button>
          </div>
        </div>

        <div style={{ margin: '0 auto', display: 'flex', borderTop: '1px solid #000' }}>
          <div style={{ padding: '10px' }}>
            <p1>samples samples samples</p1>
          </div>
          <div style={{ padding: '10px 10px 10px 380px', textAlign: 'right' }}>
            <Button variant="primary" size="sm">
              編集
            </Button>{' '}
            <Button variant="danger" size="sm">
              削除
            </Button>
          </div>
        </div>

        <div style={{ margin: '0 auto', display: 'flex', borderTop: '1px solid #000' }}>
          <div style={{ padding: '10px' }}>
            <p1>samples samples samples</p1>
          </div>
          <div style={{ padding: '10px 10px 10px 380px', textAlign: 'right' }}>
            <Button variant="primary" size="sm">
              編集
            </Button>{' '}
            <Button variant="danger" size="sm">
              削除
            </Button>
          </div>
        </div>

        <div style={{ margin: '0 auto', display: 'flex', borderTop: '1px solid #000' }}>
          <div style={{ padding: '10px' }}>
            <p1>samples samples samples</p1>
          </div>
          <div style={{ padding: '10px 10px 10px 380px', textAlign: 'right' }}>
            <Button variant="primary" size="sm">
              編集
            </Button>{' '}
            <Button variant="danger" size="sm">
              削除
            </Button>
          </div>
        </div>
      </div>


    </section>

  );
}

export default BasicExample;