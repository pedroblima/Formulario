import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BiCheckSquare, BiCaretLeft } from 'react-icons/bi'

const index = () => {

    const { push } = useRouter()
    const { register, handleSubmit } = useForm()

    function salvar(dados) {
        axios.post('/api/disciplinas', dados)
        push('/disciplinas')
        
    }

    return (
        <Pagina titulo='Disciplinas'>


            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="curso">
                    <Form.Label>curso:</Form.Label>
                    <Form.Control type="text" {...register('curso')} />
                </Form.Group>

                <div className='text-center'>

                    <Button variant="success" onClick={handleSubmit(salvar)} >
                       <BiCheckSquare/> Salvar
                    </Button>

                    <Link href={'/disciplinas'} className='ms-2 btn btn-danger'>
                        <BiCaretLeft/> Voltar
                    </Link>
                </div>

            </Form>
        </Pagina>
    )
}

export default index