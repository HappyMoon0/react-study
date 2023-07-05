import React from "react";
import { UserDispatch } from "./App";

function CreateUser({ username, email, onChange }) {
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button
        onClick={dispatch({
          type: "CREATE_USER",
          user: [
            {
              username: "asdf",
              email: "asfd",
            },
          ],
        })}
      >
        등록
      </button>
    </div>
  );
}

export default CreateUser;
