/*eslint-disable*/
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./_salesProduct.scss";
import Azza from "../../../Filters/Azza";
import SearchBar from "../../../SearchBar/SearchBar";
import {
  removeProductForAdmin,
  deletAllProductsSales,
  getBackup,
} from "../../../../redux/actions/actionFront";
import { sendDiscountToBack, deleteDiscount } from "../../../../redux/actions/actionProducts-Discounts";
import { refreshPrice } from "../../../../redux/actions/actionOrder";
import Swal from "sweetalert2";
import ReactCardFlip from "react-card-flip";

const SalesProduct = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(
    (store) => store.reducerProduct.adminProducts
  );

  const [input, setInput] = useState({
    percent: 0,
    productId: [],
  });

  const [isFlipped, setIsFlipped] = useState(false);

  const handleclick = () => {
    setIsFlipped(!isFlipped);
  };

  const SaveDiscountPrice = () => {
    dispatch(refreshPrice());
  };
  function onClose(g) {
    dispatch(removeProductForAdmin(g));
  }

  const Delete = () => {
    dispatch(deletAllProductsSales());
  };

  const Send = () => {
    try {
      input.productId = allProducts.map((x) => {
        return x.id;
      });
      Swal.fire({
        title: "please wait",
        text: "",
        icon: "info",
        confirmButtonText: "Cool",
      });
      if(input.percent ==="1"){
        dispatch(deleteDiscount(input.productId))
      } else {
        dispatch(sendDiscountToBack(input));
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  const getAll = () => {
    dispatch(getBackup());
  };

  const handleValue = (e) => {
    setInput({
      ...input,
      percent: e.target.value,
    });
  };

  const getPriceWithDiscount = (discount, price) => {
    const discountPrice = price - (price * Number(discount)) / 100;
    console.log(discountPrice);
    return discountPrice;
  };

  let num = 1;
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div>
        <tbody>
          <th>
            <h1 className="title">Apply Discounts</h1>
          </th>
        </tbody>

        <table id="products">
          <td>
            <SearchBar />
            <Azza />
          </td>
          {/* <td onClick={() => handleclick()} className="delete-td">
            descuento aplicados
          </td> */}
          <td onClick={() => Delete()} className="delete-td">
            Delete All
          </td>
          <td onClick={() => getAll()} className="getall-td">
            Select All
          </td>
        </table>
        <br />
        <br/>
        <br/>

        <table id="products">
          <tr id="trHeader">
            <td>Delete</td>
            <td></td>
            <td>Product Name</td>
            <td>Author Name</td>
            <td>Categorie</td>
            <td>Regular Price</td>
            <td>Price With Discount</td>
            <td>
              Discount % &nbsp;
              <select onChange={handleValue}>
                <option default value="0">
                  %
                </option>
                <option default value="1">
                  Delete Discounts
                </option>
                <option name={input.percent} value="5">
                  5
                </option>
                <option name={input.percent} value="10">
                  10
                </option>
                <option name={input.percent} value="15">
                  15
                </option>
                <option name={input.percent} value="20">
                  20
                </option>
                <option name={input.percent} value="25">
                  25
                </option>
                <option name={input.percent} value="30">
                  30
                </option>
                <option name={input.percent} value="35">
                  35
                </option>
                <option name={input.percent} value="40">
                  40
                </option>
                <option name={input.percent} value="45">
                  45
                </option>
                <option name={input.percent} value="50">
                  50
                </option>
              </select>
            </td>
          </tr>
          {allProducts &&
            [...allProducts].map((g) => {
              let discount = "";
              if (g.discount) {
                discount = g.discount.percent;
              }
              return (
                <>
                  <tr key={g.id}>
                    <td>
                      <button onClick={() => onClose(g.id)}>
                        <i className="fas fa-trash fontSizeIcon"></i>
                      </button>
                    </td>
                    <td>{num++}</td>
                    <td>{g?.name}</td>
                    <td>{g?.author.name}</td>
                    <td>
                      {g?.categories.map((x) => {
                        return x.name;
                      })}
                    </td>
                    <td>{g?.price}</td>
                    <td className={g && g.discount ? null : "disable"}>
                      {g && g.discount
                        ? getPriceWithDiscount(discount, g.price)
                        : 0}
                    </td>
                    <td>% {discount}</td>
                  </tr>
                </>
              );
            })}
        </table>
        <button className="buttonDiscountComp" onClick={() => Send()}>Apply</button>
        <button className="buttonDiscountComp" onClick={() => SaveDiscountPrice()}>Save</button>
      </div>
      <div>
        {/* <h1>hola</h1> */}
        <button className="buttonBackComp" onClick={handleclick}> Back </button>
      </div>
    </ReactCardFlip>
  );
};

export default SalesProduct;
