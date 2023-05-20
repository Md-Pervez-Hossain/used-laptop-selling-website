import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../UseContex/AuthProvider";
import DisplayMyProduct from "./DisplayMyProduct";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/myproduct/${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMyProducts(data);
        console.log(data);
      });
  }, [user?.email]);
  const handleMyProductDelete = (id) => {
    const agree = window.confirm("Are you Sure ? Want to Delete");
    if (agree) {
      fetch(
        `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/deleteMyProduct/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Product deleted");
            const remailningProduct = myProducts.filter(
              (product) => product._id !== id
            );
            setMyProducts(remailningProduct);
          }
          console.log(data);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }

    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/advertisement/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      {myProducts?.length > 0 ? (
        <>
          <div className="grid md:grid-cols-3 gap-5">
            {myProducts.map((myProduct) => (
              <DisplayMyProduct
                key={myProduct._id}
                myProduct={myProduct}
                handleMyProductDelete={handleMyProductDelete}
              ></DisplayMyProduct>
            ))}
          </div>
        </>
      ) : (
        <>
          <div>
            <p className="text-2xl font-bold">Product Page Empaty</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MyProduct;
