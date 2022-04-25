import React from 'react';

const BookEdit = (props) => {

    const [formData, updateFormData] = React.useState({
        name: "",
        category: 0,
        author: 0,
        availableCopies: 1
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.term.name;
        const category = formData.category !== 0 ? formData.category : props.term.category;
        const author = formData.author !== 0 ? formData.author : props.term.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.term.availableCopies;

        props.onEditBook(props.term.id, name, category, author, availableCopies);

    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder={props.term.name}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input type="text"
                               className="form-control"
                               id="category"
                               name="category"
                               required
                               placeholder={props.term.category}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) => {
                                if(props.term !== undefined &&
                                    props.term.author !== undefined &&
                                    props.term.author.id === term.id)
                                    return <option selected={props.term.author.id} value={term.id}>{term.name}</option>
                                else return <option value={term.id}>{term.name}</option>
                            })}
                        </select>
                    </div>


                    <div className="form-group">
                        <label htmlFor="availableCopies">Available copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               required
                               placeholder={props.term.availableCopies}
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BookEdit;