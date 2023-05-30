import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilSquare } from 'react-icons/bs'
import axios from 'axios'

const index = () => {

    const [disciplinas, setdisciplinas] = useState([])

    useEffect(() => {
      getAll()

    }, [])
    function getAll(){
        axios.get('/api/disciplinas').then( resultado => {
            setdisciplinas(resultado.data);
        })
    }

    function excluir(id){
        axios.delete('/api/disciplinas/' + id)
        getAll()
    }

   


    return (
        <Pagina titulo='disciplinas'>
            <Link href="/disciplinas/form" className='mb-2 btn btn-primary'>
                <AiFillPlusCircle />
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Apagar</th>
                        <th>materia</th>
                        <th>cursos</th>
                    </tr>
                </thead>
                <tbody>
                    {disciplinas.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/disciplinas/' + item.id}>
                                    <BsPencilSquare title='alterar' />
                                </Link>
                                {''}
                                <Button variant='secundary'>
                                    <BsFillTrash3Fill title='alterar' onClick={() => excluir(item.id)} />
                                </Button>
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.curso}</td>
                        </tr>
                    ))}



                </tbody>
            </Table>
        </Pagina>
    )
}

export default index