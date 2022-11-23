import React from "react";

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
    const productCategory = form.sellerName.value;
    const formData = new FormData();
    formData.append("image", image);
    console.log({
      name,
      image,
      resellPrice,
      originalPrice,
      location,
      useTime,
      sellerName,
      productCategory,
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
                name="productCategory"
                placeholder="Product Category"
                className="input  w-full my-4"
              />
            </div>
          </div>
          <textarea className="textarea w-full" placeholder="Bio"></textarea>
          <button className="w-full mt-4 bg-blue-400 text-white px-3 py-3 font-bold text-xl rounded-md">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
