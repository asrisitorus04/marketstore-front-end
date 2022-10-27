import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../utils/apiRequest";
import { Submit } from "./buttons/ButtonSubmit";
import { CardModal } from "./CardModal";

const Modal = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [objSubmit, setObjSubmit] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetchData()
    }, [])

  const fetchData = () => {
    apiRequest("users","get",{})
    .then((res) => {
      const results = res.data
      setDatas(results)
    })
    .catch((err) => {
      const {message} = err.response
      alert(message);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  const handleSubmit = async (e) => {
    setLoading(true);
    alert("oke");
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    apiRequest("users", "put", objSubmit, "multipart/form-data")
    .then((res) => {
      const { message } = res;
      alert(message);
      setObjSubmit({});

    })
    .catch((err) => {
      const { data } = err.response;
      alert(data.message);
    })
    .finally(() => fetchData());
  };

  const handleChange = (value, key) => {
    let temp = {...objSubmit};
    temp[key] = value;
    setObjSubmit(temp);
  };
  


  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="w-full modal flex justify-center">
        <div className="relative flex flex-col justify-center">
          <div className="bg-white">
            <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white w-4/6 h-4/5 rounded-2xl shadow-lg">
                <div className="flex flex-row w-full mt-10">
                  <div className="ml-16">
                    <div className="font-bold text-4xl text-black ml-10">
                      Edit Profile
                    </div>
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-sm btn-circle absolute right-4 top-4"
                    >
                      {" "}
                      ✕{" "}
                    </label>
                    <CardModal onClick={datas} />
                  </div>
                  <form onSubmit={(e) => handleSubmit(e)} className="ml-10 w-full">
                    <div className="w-full mt-8 ml-2">
                      <div className="flex flex-row">
                        <div className="w-28">
                          <label
                            className="block w-ful h-10 mb-6 text-xl font-bold text-black"
                            value={username}
                            onChange={(e) => handleChange(e.target.value, "username")}
                          >
                            {" "}
                            Username{" "}
                          </label>
                          <label
                            className="block w-ful h-10 mb-6 text-xl font-bold text-black"
                            value={email}
                            onChange={(e) => handleChange(e.target.value, "email")}
                          >
                            {" "}
                            Email{" "}
                          </label>
                          <label className="block w-ful h-10 mb-6 text-xl font-bold text-black"
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                          >
                            {" "}
                            Handphone{" "}
                          </label>
                          <label className="block w-ful h-10 mb-6 text-xl font-bold text-black">
                            {" "}
                            Name{" "}
                          </label>
                          <label className="block w-ful h-10 text-xl font-bold text-black">
                            {" "}
                            Address{" "}
                          </label>
                        </div>
                        <div className="ml-10">
                          <input
                            className="h-10 mb-6 w-80 border-2 border-primary rounded-lg"
                            placeholder=""
                            type="text"
                          />
                          <input
                            className="h-10 mb-6 w-80 border-2 border-primary rounded-lg"
                            placeholder=""
                            type="text"
                          />
                          <input
                            className="h-10 mb-6 w-80 border-2 border-primary rounded-lg"
                            placeholder=""
                            type="text"
                            onChange={(e) => handleChange(e.target.value,"phone")}
                            value={phone}
                          />
                          <input
                            className="h-10 mb-6 w-80 border-2 border-primary rounded-lg"
                            placeholder=""
                            type="text"
                            onChange={(e) => handleChange(e.target.value)}
                            value={name}
                          />
                          <input
                            className="h-10 mb-6 w-80 border-2 border-primary rounded-lg"
                            placeholder=""
                            type="text"
                            onChange={(e) => handleChange(e.target.value)}
                            value={address}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
