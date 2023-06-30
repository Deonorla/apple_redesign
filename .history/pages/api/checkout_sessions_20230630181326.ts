import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { urlFor } from "../../sanity";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

// type Data = {
//     name: string;
// }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "Deonorla" });
}
