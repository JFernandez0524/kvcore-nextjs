export async function GET(request) {
  const url = 'https://api.kvcore.com/v2/public/contacts/';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${process.env.SERVER_KEY}`,
    },
  };

  const res = await fetch(url, options);
  const contacts = await res.json();
  return Response.json(contacts);
}
