export const getAllData = async () => {
  const res = await fetch(`${process.env.BASE_API}/users`);
  const data = await res.json();
  return data;
};

export const getDataById = async (id, token) => {
  const res = await fetch(`${process.env.BASE_API}/users/${id}`, {
    headers: {
      authorization: token,
    },
  });
  const data = await res.json();
  return data;
};
