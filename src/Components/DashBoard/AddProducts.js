import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../UseContex/AuthProvider";
import { FadeLoader } from "react-spinners";

const AddProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddProductSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const resellPrice = form.resellPrice.value;
    const originalPrice = form.originalPrice.value;
    const location = form.location.value;
    const useTime = form.useTime.value;
    const sellerName = form.sellerName.value;
    const productDetails = form.productDetails.value;
    const categoryProduct = form.categoryProduct.value;
    const condition = form.condition.value;
    const time = new Date().toLocaleDateString();
    const formData = new FormData();
    formData.append("image", image);

    fetch(
      `https://api.imgbb.com/1/upload?key=86fe1764d78f51c15b1a9dfe4b9175cf`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const productsInfo = {
          name,
          image: data.data.display_url,
          resellPrice,
          originalPrice,
          location,
          useTime,
          sellerName,
          categoryProduct,
          productDetails,
          condition,
          email: user?.email,
          time,
        };
        fetch(
          "https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/addproducts",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(productsInfo),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            toast.success("Product Added");

            navigate("/dashboard/myservice");
            form.reset();
            setIsLoading(false);
            console.log(data);
          });
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleAddProductSubmit}>
        <div className="bg-gray-100 p-16">
          <div className="grid md:grid-cols-3 gap-5 ">
            <div>
              <input
                name="name"
                type="text"
                required
                placeholder="Product name"
                className="input w-full "
              />
            </div>
            <div>
              <input type="file" name="image" className="file-input w-full" />
            </div>
            <div>
              <input
                name="resellPrice"
                type="text"
                required
                placeholder="Resell Price"
                className="input w-full  "
              />
            </div>
            <div>
              <input
                type="text"
                name="originalPrice"
                required
                placeholder="Original Price"
                className="input w-full  "
              />
            </div>
            <div>
              <input
                type="text"
                name="location"
                required
                placeholder="Location"
                className="input w-full  "
              />
            </div>
            <div>
              <input
                type="text"
                name="useTime"
                required
                placeholder="Uses time"
                className="input w-full  "
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <div>
              <input
                type="text"
                defaultValue={user?.displayName}
                readOnly
                required
                name="sellerName"
                placeholder="Seller Name"
                className="input  w-full my-4"
              />
            </div>
            <div>
              <select
                name="categoryProduct"
                className="select w-full mt-4"
                required
              >
                <option>Hp</option>
                <option>MacBook</option>
                <option>Dell</option>
                <option>Acer</option>
              </select>
            </div>
            <div>
              <select name="condition" className="select w-full mt-4" required>
                <option>Excelent</option>
                <option>Fair</option>
                <option>Good</option>
              </select>
            </div>
          </div>
          <textarea
            required
            className="textarea w-full"
            placeholder="Product Description"
            name="productDetails"
          ></textarea>
          {isLoading ? (
            <>
              <FadeLoader
                color={"#000000"}
                loading={isLoading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </>
          ) : (
            <>
              {" "}
              <button className="w-full mt-4 bg-blue-400 text-white px-3 py-3 font-bold text-xl rounded-md">
                Add Product
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
