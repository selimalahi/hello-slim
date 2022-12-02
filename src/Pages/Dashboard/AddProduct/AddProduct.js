import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../../Shared/Loading/Loading";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const { data: categoryname, isLoading } = useQuery({
    queryKey: ["addproduct"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/addproducts");
      const data = await res.json();
      return data;
    },
  });

  const handleAddProduct = (data) => {
    console.log(data);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-96 p-7">
      <h2 className="text-3xl"> Add a Product</h2>

      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Add category</span>
          </label>
          <select
            {...register("specialty")}
            className="select input-bordered w-full max-w-xs"
          >
            {categoryname.map((category) => (
              <option key={category._id} value={category.name}>
                {category.category_name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Product Name</span>
              
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"/>
            
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Price</span>
              
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"/>
            
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Condition</span>
              
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"/>
            
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Number</span>
              
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"/>
            
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Description</span>
              
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"/>
            
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Used</span>
              
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"/>
            
          </div>
        
        <input
          className="btn btn-accent w-full mt-4"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
