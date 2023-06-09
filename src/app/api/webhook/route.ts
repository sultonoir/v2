import { Response } from "express";
import { WebhookEvent } from "@clerk/clerk-sdk-node";
import { prisma } from "@/lib/prisma";

export const POST = async (req: Request, res: Response) => {
  const body = await req.json();
  const evt = body.evt as WebhookEvent;
  switch (evt.type) {
    case "user.created":
      await prisma.user.create({
        data: {
          username: evt.data.username,
          email: evt.data.email_addresses[0].email_address,
          name: evt.data.first_name,
        },
      });
      // Lakukan sesuatu dengan firstName
      break;
    default:
      // Penanganan lainnya jika diperlukan
      break;
  }

  res.sendStatus(200); // Mengirim status 200 sebagai respons
};
