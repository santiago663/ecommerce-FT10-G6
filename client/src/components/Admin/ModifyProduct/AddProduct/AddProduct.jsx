/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import FilterProductByAuthor from '../FilterProductByAuthor';
import Swal from 'sweetalert2';
import {
    addProducts, getAllProducts, deleteProductCategory,
    editProductByBody, deleteProduct, editProductCategory
} from '../../../../redux/actions/actionBack';
import { upgradeEditProducts } from '../../../../redux/actions/actionUpgrade';
import '../../../../scss/components/_addProduct.scss';
import { firebase } from '../../../../firebase/firebase-config';
import SalesProduct from '../SalesProducts/SalesProduct';
import ReactCardFlip from 'react-card-flip';

function AddProduct() {

    const [isFlipped, setIsFlipped] = useState(false);

	const handleclick = () => {
		setIsFlipped(!isFlipped);
	};
    const dispatch = useDispatch()
    const allArtist = useSelector((store) => store.reducerArtist.allArtistCache)
    const allCategories = useSelector((store) => store.reducerCategories.allCategoriesCache)
    const allSeries = useSelector((store) => store.reducerSeries.allSeriesCache)
    const allProducts = useSelector((store) => store.reducerProduct.backUpProducts)
    const productOrError = useSelector((store) => store.reducerErrorRoutes.stateAction)

    const { id } = useParams();

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
        available: true,
        fileLink: "",
        preview: "",
        stock: 0,
        initialStock: 0,
        categories: [],
        authorId: 0,
        seriesId: null
    })

    const [authorName, setAuthorName] = useState("")
    const [boolean, setBoolean] = useState(false)

    useEffect(() => {
        if (id) {
            setBoolean(true)
        } else {
            setBoolean(false)
        }

        const findProduct = allProducts.find(f => f.id === Number(id))

        if (findProduct?.id) {
            setProduct({
                id: findProduct.id,
                name: findProduct.name,
                description: findProduct.description,
                price: findProduct.price,
                available: findProduct.available,
                fileLink: findProduct.fileLink,
                preview: findProduct.preview,
                stock: findProduct.stock ? findProduct.stock : 0,
                initialStock: findProduct.initialStock ? findProduct.initialStock : 0,
                categories: findProduct.categories.map(cat => cat.id),
                author: findProduct.author,
                seriesId: findProduct.seriesId,
            })

            const findArtist = allArtist.find(g => g.id == findProduct.author.id)
            setAuthorName(findArtist.name)
        }

    }, [id])

    function handleInputChange(event) {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }
    function handleInputChangeNro(event) {
        setProduct({ ...product, [event.target.name]: Number(event.target.value) })
    }

    //Handle input para available
    function handleInputChangeAv(event) {
        event.preventDefault();
        var option;
        if (event.target.value === "Yes") option = true;
        if (event.target.value === "No") option = false;
        setProduct({ ...product, [event.target.name]: option })
    }

    //Handle input para categories
    function handleInputChangeCa(event) {

        var cat = product.categories
        cat.push(allCategories.find(c => c.id == Number(event.target.value)).id)

        if (boolean) {
            dispatch(editProductCategory(product.id, event.target.value))
        }

        //borra los repetidos
        cat = cat.filter((arg, pos) => cat.indexOf(arg) == pos)
        setProduct({ ...product, [event.target.name]: cat })
    }

    //Handle input para borrar categoria
    function handleInputDeleteCa(event, id) {
        var cat = product.categories
        if (boolean) {
            dispatch(deleteProductCategory(product.id, id));
        }
        cat = cat.filter(cId => cId != Number(id))
        setProduct({ ...product, categories: cat })
    }


    const alertError = () => {
        Swal.fire({
            title: "Error Creating Product",
            icon: "error",
            timer: "1500",
            showConfirmButton: false,
        })
    }

    function submitForm(event) {
        event.preventDefault();
        if (id) {
            Swal.fire({
                title: 'Are you sure?',
                text: `The Edit to ${product.name}`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(editProductByBody(product.id, product));
                    Swal.fire(
                        'Updated!',
                        'this product is updated',
                        'success'
                    )
                } else {
                    e.target.value = 0;
                }
            })
        } else {
            if (product.categories.length !== 0 || product.authorId !== 0) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: `The Add to ${product.name}`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(addProducts(product));
                        dispatch(getAllProducts());
                        Swal.fire(
                            'Salved!',
                            'this product is SAlved',
                            'success'
                        )
                        location.reload();
                    } else {
                        e.target.value = 0;
                    }
                })
            }
            else {
                alertError();
            }
        }
    }

    const deleteProducts = (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Are you sure?',
            text: `The Delete to ${product.name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProduct(product.id))
                setProduct({
                    name: "",
                    description: "",
                    price: 0,
                    available: true,
                    fileLink: "",
                    preview: "",
                    stock: null,
                    initialStock: null,
                    categories: [],
                    authorId: 0,
                    seriesId: null
                })
                Swal.fire(
                    'Deleted!',
                    'this product is deleted',
                    'success'
                )
            } else {
                e.target.value = 0;
            }
        })
    }

    if (productOrError && productOrError.status === 200) {
        if (id) {
            let allProductsCop = allProducts
            if (product.id !== 0) {

                let indice = allProductsCop.findIndex((elemento) => {
                    if (elemento.id === Number(id)) return true;
                });

                if (indice !== -1) {
                    allProductsCop[indice] = product
                }
                allProductsCop = []
            }
            if (allProductsCop.length !== 0) upgradeEditProducts(allProductsCop);
        }
        // alertSucces();
        productOrError.status = 0
    }

    if (productOrError && productOrError.status === 200) {

        alertSucces();
        productOrError.status = 0
    }

    const initialState = {
        uploadValue: 0,
        picture: ""
    }
    const [uploadValue, setUploadValue] = useState(initialState)
    const handleOnChange = (e) => {
        const file = e.target.files[0]
        const storageRef = firebase.storage().ref(`pictures/${file.name}`)
        const task = storageRef.put(file)

        task.on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setUploadValue({
                uploadValue: percentage
            })

        }, (error) => {
            console.error(error.message)
        }, async () => {
            // Upload complete
            setUploadValue({
                message: 'subido',
                picture: await task.snapshot.ref.getDownloadURL()
            })
            setProduct({
                ...product,
                fileLink: await task.snapshot.ref.getDownloadURL(),
                preview: await task.snapshot.ref.getDownloadURL()
            })
        })
    }

    const deletefile = () => {
        const storageRef = firebase.storage().ref()
        var desertRef = storageRef.child(uploadValue.picture);
        // Delete the file
        desertRef.delete().then(function () {
            // File deleted successfully
            console.log('eliminado con exito');
        }).catch(function (error) {
            // Uh-oh, an error occurred!
            console.log(error);
        });
    }

    return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
			<div className="mainDivAP">
				<div className="Left-side container">
					<div className="filProductByAuthor">
						<FilterProductByAuthor />
					</div>
					<div className="divAP">
						{id ?
						<h2 className="title">Edit Product</h2>
						:
						<h2 className="title">Add Product</h2>
						}
						<form className="formAP" onSubmit={submitForm}>
							<div className="rigth">
								<div>
									Name:
									{id ? (
										<input
											required
											className="inputprod"
											type="text"
											onChange={handleInputChange}
											name="name"
											value={product.name}
										/>
									) : (
										<input
											required
											className="inputprod"
											type="text"
											onChange={handleInputChange}
											name="name"
										/>
									)}
								</div>
								<div>
									Description:
									{id ? (
										<textarea
											required
											className="textareaprod"
											type="text"
											onChange={handleInputChange}
											name="description"
											value={id ? product.description : ''}
										/>
									) : (
										<textarea
											required
											className="textareaprod"
											type="text"
											onChange={handleInputChange}
											name="description"
										/>
									)}
								</div>
								<div>
									Artist:
									{id ? (
										<select
											className="selector"
											name="authorId"
											id="selectorArAP"
											onChange={handleInputChangeNro}
											value={product.author?.id}
										>
											<option> </option>
											{allArtist.map((a) => (
												<option key={a.id} value={a.id}>
													{a.name}
												</option>
											))}
										</select>
									) : (
										<select
											className="selector"
											name="authorId"
											id="selectorArAP"
											onChange={handleInputChangeNro}
										>
											<option> </option>
											{allArtist.map((a) => (
												<option key={a.id} value={a.id}>
													{a.name}
												</option>
											))}
										</select>
									)}
								</div>

								<div>
									Series:
									<select className="selector" name="seriesId" id="selectorSeAP">
										{allSeries.map((s) => (
											<option key={s.id} value={s.id}>
												{s.name}
											</option>
										))}
									</select>
								</div>
								<div>
									Categories:
									<select
										className="selector"
										name="categories"
										id="selectorCaAP"
										onChange={handleInputChangeCa}
									>
										<option> </option>
										{allCategories.map((c) => (
											<option key={c.id} value={c.id}>
												{c.name}
											</option>
										))}
									</select>
									{id
										? product.categories.map((p) => (
												<span
													className="catego"
													key={p?.id}
													onClick={(event) => handleInputDeleteCa(event, p)}
												>
													{allCategories.find((c) => c.id == p)?.name}
												</span>
										  ))
										: product.categories.map((id) => (
												<span
													className="catego"
													key={id?.id}
													onClick={(event) => handleInputDeleteCa(event, id)}
												>
													{allCategories.find((c) => c.id == id)?.name}
												</span>
										  ))}
								</div>
							</div>
							<div className="left">
								<div>
									Price:
									{id ? (
										<input
											required
											className="inputprod"
											type="number"
											onChange={handleInputChangeNro}
											name="price"
											value={product.price}
										/>
									) : (
										<input
											required
											className="inputprod"
											type="number"
											onChange={handleInputChangeNro}
											name="price"
										/>
									)}
								</div>
								<div className="contentStock">
									<div className="inputStock">
										Stock:
										{id ? (
											<input
												required
												className="inputprod"
												type="number"
												onChange={handleInputChangeNro}
												value={product.stock}
												name="stock"
											/>
										) : (
											<input
												required
												className="inputprod"
												type="number"
												onChange={handleInputChangeNro}
												name="stock"
											/>
										)}
									</div>
									<div className="inputStock">
										Max Stock:
										{id ? (
											<input
												required
												className="inputprod"
												type="number"
												onChange={handleInputChangeNro}
												value={product.initialStock}
												name="initialStock"
											/>
										) : (
											<input
												required
												className="inputprod"
												type="number"
												onChange={handleInputChangeNro}
												name="initialStock"
											/>
										)}
									</div>
								</div>
								<div>
									Available:
									{id ? (
										<select
											className="selector"
											name="available"
											id="selectorAvAP"
											onChange={handleInputChangeAv}
											value={product.available ? 'Yes' : 'No'}
										>
											<option value="Yes">Yes</option>
											<option value="No">No</option>
										</select>
									) : (
										<select
											className="selector"
											name="available"
											id="selectorAvAP"
											onChange={handleInputChangeAv}
										>
											<option value="Yes">Yes</option>
											<option value="No">No</option>
										</select>
									)}
								</div>
								<div>
									Select File:
									<input
										className="SelectorFile"
										type="file"
										title="otra cosa"
										onChange={handleOnChange}
										name="file"
									/>
								</div>
								<div>
									FileLink:
									{id ? (
										<input
											required
											className="inputprod"
											type="text"
											onChange={handleInputChange}
											name="fileLink"
											value={product.fileLink}
											onChangeCapture=""
										/>
									) : (
										<input
											required
											className="inputprod"
											type="text"
											onChange={handleInputChange}
											name="fileLink"
											value={uploadValue.picture}
											onChangeCapture=""
										/>
									)}
								</div>
								<div>
									Preview:
									{id ? (
										<input
											required
											className="inputprod"
											type="text"
											onChange={handleInputChange}
											name="preview"
											value={product.preview}
										/>
									) : (
										<input
											required
											className="inputprod"
											type="text"
											onChange={handleInputChange}
											name="preview"
											value={uploadValue.picture}
										/>
									)}
								</div>

								{id ? (
									<div className="editOrAdd-container">
										<input className="EditOrAdd" type="submit" value="Update" />
										<input
											className="EditOrAdd"
											type="button"
											value="Delete"
											onClick={deleteProducts}
										/>
									</div>
								) : (
									<>
										<input className="EditOrAdd" type="submit" value="Add" />
									</>
								)}
							</div>
						</form>
                                <button onClick={handleclick}>Sales</button>
					</div>
					<progress className="progress" value={uploadValue.uploadValue} max="100">
						{uploadValue.uploadValue} %
					</progress>
				</div>
				{id ? (
					<div className="imgfile">
						<div className="image">
							{id ? (
								<img className="image" src={product.preview} />
							) : (
								<img className="image" src={uploadValue.picture} />
							)}
						</div>
						<input type="submit" value="delete image" onClick={deletefile} />
					</div>
				) : null}
			</div>
			<div className="mainDivAP">
                <div className="Left-side container">
                    <div className="filProductByAuthor">
				<SalesProduct />
                    </div>
                    
				<button onClick={handleclick}>Sales</button>

                </div>
			</div>
		</ReactCardFlip>
	);
}

export default AddProduct
