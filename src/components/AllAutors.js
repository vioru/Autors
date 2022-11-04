import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const AllAutors = () => {

    const [autores, setAutores] = useState([]);
    console.log(autores);

    useEffect(() => {
        axios.get("http://localhost:8000/api/autors")
            .then(res => setAutores(res.data))
            .catch(err => console.log(err));
    }, [])


    const DeleteAutor = id => {
        axios.delete("http://localhost:8000/api/autors/"+id)
            .then(res =>{

                let newList = autores.filter(autors => autors._id !== id);
                    setAutores(newList);

            })
    }



    return (
        <div>
            <h1>Autores</h1>
            <Link to="/new" className="btn btn-success">Nuevo Autor</Link>
            
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Frase celebre</th>
                        <th>Libros</th>
                        <th>Cuentos</th>
                        <th>Artículos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        autores.map((autor, index) => (
                            <tr key={index}>
                                <td>{autor.nombre}</td>
                                <td>
                                    <img src={autor.imagen} alt="autor" className="img-fluid"  width="200px"/>
                                </td>
                                <td>{autor.cita}</td>
                                <td>
                                    {
                                        autor.libros ? <span className="bi bi-check text-success"></span> : <span className="bi bi-x text-danger"></span>
                                    }
                                </td>
                                <td>
                                    {
                                        autor.cuentos ? <span className="bi bi-check text-success"></span> : <span className="bi bi-x text-danger"></span>
                                    }
                                </td>
                                <td>
                                    {
                                        autor.articulos ? <span className="bi bi-check text-success"></span> : <span className="bi bi-x text-danger"></span>
                                    }
                                </td>
                                <td>
                                <Link className="btn btn-warning" to={`/edit/${autor._id}`}>Editar</Link>
                                <button className="btn btn-danger" onClick={()=>DeleteAutor(autor._id)} >Eliminar</button>


                                </td>

                            </tr>

                        ))
                    }
                </tbody>

            </table>

        </div>

    )

}


export default AllAutors;
