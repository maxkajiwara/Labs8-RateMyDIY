import React from "react"; // removed { component } from import

const Auth = () => {
  return (
    <div>
      <a
        href={`${process.env.API_URL ||
          `http://localhost:${process.env.PORT}`}/signin`}
      >
        Sign Up or Sign In
      </a>
    </div>
  );
};

export default Auth;
