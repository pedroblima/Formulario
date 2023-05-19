import Pagina from '@/components/Pagina'
import { useRouter } from 'next/router'
import React  from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const index = () => {

    const { push }  = useRouter()

    const { register, handleSubmit } = useForm()

    function salvar(dados) { // salvar dados no localstorage 
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []// tirar de uma string 
        cursos.push(dados)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))//transformar em uma string
        push('/cursos')
    }

    return (
        <Pagina titulo='Forms'>


            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração:</Form.Label>
                    <Form.Control type="text" {...register('duracao')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade:</Form.Label>
                    <Form.Control type="text" {...register('modalidade')} />
                </Form.Group>
        

                    <Button variant="success" onClick={handleSubmit(salvar)} >
                        Salvar
                    </Button>
              
            </Form>
        </Pagina>
    )
}

export default index