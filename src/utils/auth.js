export const signIn = () => {
    // return fetch(`${BASE_URL}/signin`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // }).then((res) => {
    //   return checkResponse(res);
    // });
    return new Promise((resolve) => {
        resolve({ token: "jwt" });
      });
  };

  export const signUp = () => {
    return new Promise((resolve) => {
      resolve({ token: "jwt" });
    });
  };

  export const checkToken = () => {
    // Stub out back-end
    return new Promise((resolve) => {
      resolve({
        data: { name: "Test", email: "test@test.com.com", id: "test-id" },
      });
    });
  };