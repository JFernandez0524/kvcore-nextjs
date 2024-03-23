import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils';
const url =
  'http://api.kvcore.com/v2/public/contacts?filter[hashtags][]=%23zillow';

export async function GET(request) {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.SERVER_KEY}`,
    },
  });
  const contacts = await res.json();
  return Response.json(contacts);
}
