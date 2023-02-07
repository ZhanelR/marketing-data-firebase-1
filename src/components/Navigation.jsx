import Nav from 'react-bootstrap/Nav';
import "../Pages/Styles.css"


function Navigation () {
  return (
    //если обернуть в контейнер и row, ошибка 
    <div className="nav-container">
        <Nav className="bg-dark" 
        activeKey="/"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/" className="text-white">SHARETRADE.com</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
    
  );
}

export default Navigation;