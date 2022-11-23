import React from "react";
import toast from "react-hot-toast";

const AddProducts = () => {
  const handleAddProductSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const resellPrice = form.resellPrice.value;
    const originalPrice = form.originalPrice.value;
    const location = form.location.value;
    const useTime = form.useTime.value;
    const sellerName = form.sellerName.value;
    const productDetails = form.productDetails.value;
    const productId = form.productId.value;
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
          productId,
          productDetails,
        };
        fetch("http://localhost:5000/addproducts", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productsInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("Product Added");
            form.reset();
            console.log(data);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleAddProductSubmit}>
        <div className="bg-gray-100 p-16">
          <div className="grid grid-cols-3 gap-5">
            <div>
              <input
                name="name"
                type="text"
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
                placeholder="Resell Price"
                className="input w-full  "
              />
            </div>
            <div>
              <input
                type="text"
                name="originalPrice"
                placeholder="Original Price"
                className="input w-full  "
              />
            </div>
            <div>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input w-full  "
              />
            </div>
            <div>
              <input
                type="text"
                name="useTime"
                placeholder="Uses time"
                className="input w-full  "
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                name="sellerName"
                placeholder="Seller Name"
                className="input  w-full my-4"
              />
            </div>
            <div>
              <input
                type="text"
                name="productId"
                placeholder="Product Id"
                className="input  w-full my-4"
              />
            </div>
          </div>
          <textarea
            className="textarea w-full"
            placeholder="Bio"
            name="productDetails"
          ></textarea>
          <button className="w-full mt-4 bg-blue-400 text-white px-3 py-3 font-bold text-xl rounded-md">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
