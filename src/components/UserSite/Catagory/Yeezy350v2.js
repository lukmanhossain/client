import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const Yeezy350v2 = () => {
  const [Yeezy_350_v2, setYeezy_350_v2] = useState([]);

  useEffect(() => {
    fetch("https://secret-ravine-65882.herokuapp.com/Product")
      .then((res) => res.json())
      .then((data) => {
        const Yeezy_350_v2 = data?.filter(
          (Yeezy_350_v2) => Yeezy_350_v2?.Catagory === "Yeezy_350_v2"
        );
        setYeezy_350_v2(Yeezy_350_v2);
      });
  }, []);

  return (
    <div className="mx-3 mt-5 mb-5">
      {!Yeezy_350_v2.length ? <div className="spnier">
        <ScaleLoader color={"#7093e5"} size={150} />
      </div> :


        <div className="row home-content-product">
          {Yeezy_350_v2?.map((product) => (
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
        </div>}
    </div>
  );
};

export default Yeezy350v2;
