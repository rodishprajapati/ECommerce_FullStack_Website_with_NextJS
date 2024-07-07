import React, { createContext } from "react";

export const userContext = createContext({
  user_name: "Rodish",
});

const UserProvider = (props: any) => {
  return (
    <>
      <userContext.Provider
        value={{
          user_name: "Rodish",
        }}
      >
        {props.children}
      </userContext.Provider>
    </>
  );
};
export default UserProvider;
