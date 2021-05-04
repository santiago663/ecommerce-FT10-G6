/*eslint-disable*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../../scss/components/_filterProductByAuthor.scss';

const FilterProductByAuthor = () => {

    const allArtist = useSelector((store) => store.reducerArtist.allArtistCache)
    const allProducts = useSelector((store) => store.reducerProduct.backUpProducts)
    const [input, setInput] = useState(0);
    const [div, setDiv] = useState(false);

    const handleChange = (id) => {
        if (id.target.value !== 0) {
            setInput(id.target.value);
        }
    }

    const handleProductAuthorClick = () => {
        setDiv(true)
    }

    let authorProducts = [];
    if (input !== 0) {
        authorProducts = allProducts.filter(f => {
            if (f.author.id === undefined) return;
            if (f.author.id === Number(input)) {
                return f
            }
        })
    }


    return (
        <>
            <div className="filterProductsByAuhorTitle">
                <h3>Find products by author's name</h3>
                <div>Select an Author to get all their products</div>
                <span> then select a product to see the details and edit it</span>
            </div>
            <div className='authorSelect'>
                <select
                    className="authorSelector"
                    name="authorId"
                    onChange={handleChange}
                    onClick={() => setDiv(false)}
                >
                    <option
                        value=""
                        disabled selected
                    >Select Author</option>
                    {allArtist.map(a => <option value={a.id}>{a.name}</option>)}
                </select>
            </div>
            <div className="authorsProduct">
                {!div ?
                    authorProducts.length !== 0
                        ? <ul>
                            {authorProducts.length !== 0 && authorProducts.map(m => {
                                return (
                                    <li className="product" key={m.id}>
                                        <Link to={`/Admin/Product/Edit/${m.id}`}>
                                            <h4 onClick={handleProductAuthorClick}>{m.name}</h4>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        : null
                    :
                    null
                }
            </div>
        </>
    );
}

export default FilterProductByAuthor;