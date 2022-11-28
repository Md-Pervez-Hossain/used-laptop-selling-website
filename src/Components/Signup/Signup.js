import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../UseContex/AuthProvider";
import { FadeLoader } from "react-spinners";
const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const {
    createUser,
    updateUserProfile,
    loading,
    setLoading,
    signInWithGoogle,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    console.log({ name, image, email, password, role });

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
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            updateUserProfile(name, data.data.display_url)
              .then(() => {
                const signupInfo = {
                  name,
                  image: data.data.display_url,
                  email,
                  password,
                  role,
                  status: "unverified",
                };
                fetch(
                  "https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/users",
                  {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(signupInfo),
                  }
                )
                  .then((res) => res.json())
                  .then((data) => {
                    toast.success("User SuccessFully Created");
                    getUserToken(email);
                    form.reset();
                    setIsLoading(false);
                    console.log(data);
                  })
                  .catch((error) => {
                    toast.error(error.message);
                    setIsLoading(false);
                  });

                form.reset();
              })
              .catch((error) => {
                toast.error(error.message);
                setIsLoading(false);
              });
          })
          .catch((error) => {
            toast.error(error.message);
            setIsLoading(false);
          });

        console.log(data);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleGoogleSignUp = () => {
    setGoogleLoading(true);
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const signupInfo = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          status: "unverified",
          role: "Buyer",
        };
        fetch(
          "https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/users",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(signupInfo),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            toast.success("User SuccessFully Created");
            console.log(data);
            setGoogleLoading(false);
          })
          .catch((error) => {
            toast.error(error.message);
            setGoogleLoading(false);
          });
        getUserToken(user.email);
      })
      .catch((error) => {
        toast.error(error.message);
        setGoogleLoading(false);
      });
  };

  const getUserToken = (email) => {
    fetch(
      `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/jwt?email=${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          navigate(from, { replace: true });
        }
      });
  };

  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Signup</h1>
        </div>
        <form
          onSubmit={handleSignupSubmit}
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-400  text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="file-input file-input-bordered w-full"
                accept="image/*"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-400  text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300  focus:outline-blue-400 text-gray-900"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Role
                </label>
              </div>
              <select name="role" className="select w-full border-gray-300">
                <option selected>Buyer</option>
                <option>Seller</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
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
                <div>
                  <button className=" bg-blue-400 px-2 py-3 font-bold rounded-md text-white w-full">
                    Signup
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with Google accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          {googleLoading ? (
            <>
              <FadeLoader
                color={"#000000"}
                loading={googleLoading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </>
          ) : (
            <>
              <button
                onClick={handleGoogleSignUp}
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
            </>
          )}
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account yet?{" "}
          <Link to="/login" className="hover:underline text-gray-600">
            Sign In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Signup;
