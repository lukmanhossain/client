import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Others = () => {
  const [Others, setOthers] = useState([]);

  useEffect(() => {
    fetch("https://secret-ravine-65882.herokuapp.com/Product")
      .then((res) => res.json())
      .then((data) => {
        const Others = data?.filter((Others) => Others?.Catagory === "Others");
        setOthers(Others);
      });
  }, []);
  return (
    <div className="mx-3 mt-5 mb-5">
      <div className="row home-content-product">
        {Others?.map((product) => (
          <div className=" show-product-air" key={product._id}>
            <div className="image-fild">
              <img src={product?.image} alt="" className="image-show" />
            </div>

            <div className="home-product-info">
              <div className="product-content-info">
                <h4>{product.Product_Name}</h4>
                <h6>{product.Model}</h6>
                <p>Price : AED {product.price}</p>
                <div className="link-product">
                  <Link to={`/details/${product._id}`} className="details-link">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Others;
