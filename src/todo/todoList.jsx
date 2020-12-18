import React from 'react';
import IconButton from '../template/iconButton';

export default props => {

    console.log(props.list);

    const renderRows = () => {

        const list = props.list || [];

        return (
            list.map(todo =>
                <tr key={todo._id}>
                    <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                    <td>
                        <IconButton style="success"
                            icon="check"
                            hide={todo.done}
                            onClick={() => props.handleDone(todo)}>
                        </IconButton>
                        <IconButton style="warning"
                            icon="undo"
                            hide={!todo.done}
                            onClick={() => props.handlePending(todo)}>
                        </IconButton>
                        <IconButton style="danger"
                            icon="trash-o"
                            hide={!todo.done}
                            onClick={() => props.handleRemove(todo)}>
                        </IconButton>
                    </td>
                </tr>
            )
        );
    }

    return (
        <table className='table'>
            <thead className="tableActions">
                <tr>
                    <td>Descrição</td>
                    <td>Ações</td>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
}