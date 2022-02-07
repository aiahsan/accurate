const sendMail = async (body) => {
  const request = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const { status } = request;
  if (status === 204) {
    return { status };
  }
  const data = await request.json();

  return { data, status };
};

export const repository = { sendMail };
