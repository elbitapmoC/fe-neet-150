import { useEffect } from "react";

const InCommon = ({ title, description }) => {
  let obj = {};
  let arr1 = [1, 3, 5];
  let arr2 = [2, 4, 6];
  useEffect(() => {
    console.log("Init");
    console.log("In common? ", checkForValuesInCommon());
  }, []);

  const checkForValuesInCommon = () => {
    for (let i = 0; i < arr1.length; i++) {
      obj[arr1[i]] = true;
    }
    for (let i = 0; i < arr2.length; i++) {
      if (obj[arr2[i]]) return true;
    }
    return false;
  };

  return (
    <>
      <h1 className="title text-4xl">{title}</h1>
      <aside>{description}</aside>
      <button
        type="button"
        className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 mr-2 mb-2"
      >
        Add 1
      </button>
    </>
  );
};

export default InCommon;
