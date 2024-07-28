import 'bootstrap/dist/css/bootstrap.min.css'; // BootstrapのCSSをインポート
import Button from 'react-bootstrap/Button'; // React BootstrapのButtonコンポーネントをインポート
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function BasicExample() {
  return (
    <section>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </Container>
      </Navbar>

      <div>
        <Button variant="info">新規追加</Button>
      </div>
      <div class="center-block">
        
      <Row>
        <Col>samples</Col>
      </Row>
   
      <div>
        <p class="text-right">samples samples samples</p>
        <Button variant="primary" size="sm">
          編集
        </Button>{' '}
        <Button variant="danger" size="sm">
          削除
        </Button>
      </div>
      <div>
        <p1>samples samples samples</p1>
  
        <Button  className="edit-button" variant="primary" size="sm">
          編集
        </Button>{' '}
        <Button variant="danger" size="sm">
          削除
        </Button>
      </div>
      <div>
        <p1>samples samples samples</p1>
        <Button variant="primary" size="sm">
          編集
        </Button>{' '}
        <Button variant="danger" size="sm">
          削除
        </Button>
      </div>
      <div>
        <p1>samples samples samples</p1>
        <Button variant="primary" size="sm">
          編集
        </Button>{' '}
        <Button variant="danger" size="sm">
          削除
        </Button>
      </div>
      </div>
    </section>

  );
}

export default BasicExample;