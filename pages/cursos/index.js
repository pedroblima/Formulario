import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilSquare } from 'react-icons/bs'


const index = () => {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        setCursos(getAll())

    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('cursos')) || []
    }

    function excluir(id) {
        if (confirm('Deseja excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('cursos', JSON.stringify(itens))
            setCursos(itens)

        }
    }

    return (
        <Pagina titulo='cursos'>
            <Link href="/cursos/form" className='mb-2 btn btn-primary'>
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
                    {cursos.map((curso, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/cursos/' + i}>
                                    <BsPencilSquare title='alterar'/>
                                </Link>
                                {''}
                                <Button variant='secundary'>
                                    <BsFillTrash3Fill title='alterar' onClick={() => excluir(i)} />
                                </Button>
                            </td>
                            <td>{curso.nome}</td>
                            <td>{curso.modalidade}</td>
                            <td>{curso.duracao}</td>
                        </tr>
                    ))}



                </tbody>
            </Table>
        </Pagina>
    )
}

export default index