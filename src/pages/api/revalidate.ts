/**
 * https://www.paigeniedringhaus.com/blog/how-to-unit-test-next-js-api-routes-with-typescript
 */
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // check validation request
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Not Validate Token' });
  }

  try {
    // Recreate of page
    await res.unstable_revalidate('/');
    return res.json({ revalidated: true });
  } catch (err) {
    // if error: Next.js will show the orginal create page.
    return res.status(500).send('Error: Recheck');
  }
}
