import React, { useState, useEffect } from "react";

const Header = () => {
  const [edit, setEdit] = useState(false);
  const [titleHeader, setTitleHeader] = useState();
  const onTitleHeaderChange = (e) => setTitleHeader(e.target.value);

  const toLocalStorage = () => {
    localStorage.setItem("titleHeader", titleHeader);
  };
  useEffect(() => {
    if (localStorage.getItem("titleHeader")) {
      setTitleHeader(localStorage.getItem("titleHeader"));
    }
  }, []);

  return (
    <div className="w-full h-[75px] bg-gray-100 shadow-md">
      <div className="container mx-auto h-full flex items-center justify-between">
        {edit ? (
          <input
            type="text"
            value={titleHeader}
            onChange={onTitleHeaderChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEdit(false);
                toLocalStorage();
              }
            }}
            className="bg-transparent border-none text-2xl font-bold rounded-md px-5 py-2"
          />
        ) : (
          <h1 onClick={() => setEdit(true)} className="text-2xl font-bold">
            {titleHeader}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Header;
