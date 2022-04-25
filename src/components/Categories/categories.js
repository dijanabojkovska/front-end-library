import React from 'react';

class Categories extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        const cats = this.props.categories !== undefined;
        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                            </tr>
                            </thead>
                            <tbody>
                            {cats && this.props.categories.map((term) => {
                                return (
                                    <tr>
                                        <td>{term.toString()}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}

export default Categories;