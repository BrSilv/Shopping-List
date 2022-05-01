import './styles.css';
import React, { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { message, Form, Input, Button, InputNumber } from 'antd';

export default function AdicionarProduto(){
    const [ disabled, setDisabled ] = useState(false)
    const history = useHistory()
    async function handleSubmit(produto){
        setDisabled(true)
        api.post('/item', produto)
            .then((Response) =>{
                if(Response.status === 201){
                    message.success('Produto adicionado com sucesso!', 5);
                    history.push('/produtos')
                }
            })
            .catch((err) =>{
                message.error('Aconteceu um erro ao adicionar o produto ' + err.response.data.message)
            })
    }
    return(
        <div className='produto__container'>
            <h1>Adicionar novo produto</h1>
            <br/>
            <div>
                <Form
                name='submitProduto'
                labelCol={{span:8}}
                wrapperCol={{span:16}}
                onFinish={handleSubmit}
                autoComplete="off"
                >
                    <Form.Item
                    label='Nome do item'
                    name="name"
                    rules={[{ required: true, message: "O nome do item não pode ser vazio" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                    label='Descrição'
                    name="description"
                    rules={[{ required: true, message: "Insira a descrição do item" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                    label='Quantidade'
                    name="quantity"
                    >
                        <InputNumber />
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit' disabled={disabled} shape={'round'}>
                            Adicionar
                        </Button>
                    </Form.Item>

                </Form>

            </div>
        </div>
    )
}
