import './App.css';
import { Menu, Layout } from 'antd';
import Routes from './routes'
import { PlusCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;





function App() {

  let history = useHistory();
  



  return (
    <div className="main">
      
      <Layout className='main__content'>
        <Header className='header'>Lista de Compras</Header>
        <Layout>
          <Sider className='menu'>
            <Menu className='menu__section'>
              <Menu.Item key={1} icon={<PlusCircleOutlined />} onClick={() => history.push('/adicionar')} >
                Adcionar Produto
              </Menu.Item>
              <Menu.Item key={2} icon={<UnorderedListOutlined />} onClick={() => history.push('/produtos')}>
                Listar Produtos
              </Menu.Item>
            </Menu>
          </Sider>
          <Content className='content'>
            <Routes />
          </Content>
        </Layout>
        <Footer className='footer'>&copy; Todos os direitos reservados</Footer>
      </Layout> 

    </div>
  );
}

export default App;
