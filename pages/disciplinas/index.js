import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilSquare } from 'react-icons/bs'


const index = () => {

    const [disciplinas, setdisciplinas] = useState([])

    useEffect(() => {
        

    }, [])  

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
                        <th>Nome</th>
                        <th>Modalidade</th>
                        <th>Duração</th>
                    </tr>
                </thead>
                <tbody>
                    {disciplinas.map((disciplina, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/disciplinas/' + i}>
                                    <BsPencilSquare title='alterar'/>
                                </Link>
                                {''}
                                <Button variant='secundary'>
                                    <BsFillTrash3Fill title='alterar' onClick={() => excluir(i)} />
                                </Button>
                            </td>
                            <td>{disciplina.nome}</td>
                            <td>{disciplina.modalidade}</td>
                            <td>{disciplina.duracao}</td>
                        </tr>
                    ))}



                </tbody>
            </Table>
        </Pagina>
    )
}

export default index