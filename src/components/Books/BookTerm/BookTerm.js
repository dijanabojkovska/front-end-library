import React from 'react';
import {Link} from 'react-router-dom';

const BookTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <Link title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}
                      to={`/`}>
                    Delete
                </Link>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/api/edit/${props.term.id}`}>
                    Edit
                </Link>
                <Link title={"Mark as taken"} className={"btn btn-outline-success"}
                   onClick={() => props.onMarkAsTaken(props.term.id)}
                    to={`/`}>
                    Mark as taken
                </Link>
            </td>
        </tr>
    )
}

export default BookTerm;