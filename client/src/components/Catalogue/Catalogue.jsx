/*eslint-disable*/
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProductsScores } from "../../redux/actions/actionFront";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";
import "../../scss/containers/_catalogue.scss";

function Catalogue() {
  const dispatch = useDispatch();

  const allProduct = useSelector((store) => store.reducerProduct.allProductCache);
  const productsPerPage = useSelector((store) => store.reducerPagination.productsPerPage);
  const currentPage = useSelector((store) => store.reducerPagination.currentPage);
  const loading = useSelector((store) => store.reducerLoading.loading);
  const allScores = useSelector((store) => store.reducerProduct.allProductsScores)

  const allScoresStore = allProduct.map(product => { return { id: product.id, score: product.score } })

  useEffect(() => {
    if (allScoresStore[0]) dispatch(allProductsScores(allScoresStore))
    if (allScores[0]) dispatch(allProductsScores(allScores))
  }, [allScoresStore[0]?.id])

  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts = allProduct.slice(indexFirstProduct, indexLastProduct);

  if (loading) {
    return (
      <div className="loader-container">
        <Loading />
      </div>
    );
  }

  return (
    <Fragment>
      <div className="catalogue-wrapper">
        {currentProducts &&
          currentProducts.map((artwork) => (
            <ProductCard key={artwork.id} data={artwork} />
          ))}
      </div>
      <div className="paginate">
        <Pagination
          cardsPerPage={productsPerPage}
          totalCards={allProduct.length}
        />
      </div>
    </Fragment>
  );
}

export default Catalogue;
