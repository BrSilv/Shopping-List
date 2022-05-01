import { useHistory } from 'react-router-dom';
import './styles.css';
import Logo from '../assets/list-logo.jpg';
import { Button } from 'antd';

export default function Inicio(){
    const history = useHistory()
    async function listarProdutos(event){
        event.preventDefault();
        history.push('/produtos')
    }
    return(
        <div>
            <section>
                <img src={Logo} alt='logo' className='center'/>
                <Button type='primary' onClick={listarProdutos} className='btn_center' shape={'round'}>Ver Produtos</Button>
            </section>
        </div>
    )
}