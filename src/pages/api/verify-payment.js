import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { paymentKey, orderId, amount } = req.body;

    try {
      const response = await axios.post(
        "https://api.tosspayments.com/v1/payments/confirm",
        {
          paymentKey,
          orderId,
          amount,
        },
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${process.env.TOSS_SECRET_KEY}:`
            ).toString("base64")}`,
            "Content-Type": "application/json",
          },
        }
      );

      res.status(200).json(response.data);
    } catch (error) {
      res
        .status(400)
        .json({ message: "결제 검증 실패", error: error.response.data });
    }
  } else {
    res.status(405).end();
  }
}
