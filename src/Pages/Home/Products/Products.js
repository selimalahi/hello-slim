import React from "react";

const Products = ({ products, setSingleProducts }) => {
  const {
    img,
    productName,
    email,
    location,
    condition,
    date,
    orginal_price,
    resale_price,
    use,
    seller_name,
  } = products;

  return (
    <div className="card card-compact  bg-base-100 shadow-xl ">
      <figure>
        <img className="h-72 object-cover " src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{productName}</h2>
          <h2 className="card-title">{condition}</h2>
        </div>
        <div className=" mt-5 flex justify-between">
          <div className=" ">
            <h2 className="border-2 rounded-2xl p-2 bg-orange-500 text-white">
              Email: {email}
            </h2>
            <h2 className="border-2 rounded-2xl p-2 bg-orange-500 text-white">
              Location: {location}
            </h2>
          </div>
          <div>
            <p className="border-2 rounded-2xl p-2 bg-orange-500 text-white">
              {" "}
              Used: {use}
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-3">
          <p className="text-white text-sm text-bold border-2 rounded-2xl p-2 bg-orange-500">
            orginal price: {orginal_price}
          </p>
          <p className="text-white text-sm text-bold border-2 rounded-2xl p-2 bg-orange-500">
            resale price: {resale_price}
          </p>
        </div>
        <div className="flex justify-between gap-5 mt-3">
          <p className="text-white text-sm text-bold border-2 rounded-2xl p-2 bg-slate-900">
            Seller: {seller_name}
          </p>
          <p className="text-white text-sm text-bold border-2 rounded-2xl p-2 bg-slate-900">
            post: {date}
          </p>
        </div> 
        <div className="card-actions justify-end">         
          <label 
          htmlFor="booking-modal"
         className="btn btn-primary"
         onClick={() => setSingleProducts(products)}
         >Book Now</label>

        </div>
      </div>
    </div>
  );
};

export default Products;
