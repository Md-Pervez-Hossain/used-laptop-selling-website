import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../UseContex/AuthProvider";
import DisplayMyProduct from "./DisplayMyProduct";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
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
      {loading ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-400"></div>
          </div>
        </>
      ) : (
        <>
          {myProducts?.length > 0 ? (
            <>
              <div>
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    {/* head */}
                    <thead>
                      <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Image</th>
                        <th>Amount</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myProducts?.map((myProduct, idx) => {
                        return (
                          <tr key={myProduct?._id}>
                            <th>{idx + 1}</th>
                            <td>{myProduct?.name}</td>
                            <td>
                              <div
                                style={{
                                  backgroundImage: `url(${myProduct?.image})`,
                                }}
                                className="bg-cover bg-center bg-no-repeat h-[80px] w-[80px] rounded-full"
                              ></div>
                            </td>
                            <td>{myProduct?.resellPrice}</td>
                            <td>
                              <div className="flex gap-5">
                                <FaTrashAlt
                                  onClick={() =>
                                    handleMyProductDelete(myProduct?._id)
                                  }
                                  className="cursor-pointer text-blue-400"
                                ></FaTrashAlt>
                                <FaEdit className="cursor-pointer text-blue-400"></FaEdit>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <p className="text-2xl font-bold">Product Page Empaty</p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MyProduct;
