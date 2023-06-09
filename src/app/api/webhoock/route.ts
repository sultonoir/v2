import type { WebhookEvent } from "@clerk/clerk-sdk-node";
import { prisma } from "../db";

export const POST = async (req: any) => {
  const evt: WebhookEvent = req.body.evt;
  switch (evt.type) {
    case "user.created":
      const user = await prisma.user.create({
        data: {
          email: evt.data.email_addresses[0].email_address,
          username: evt.data.username,
          name: evt.data.first_name,
        },
      });
      break;
    default:
      // Handle other event types if needed
      break;
  }
};
