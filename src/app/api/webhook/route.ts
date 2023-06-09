import type { WebhookEvent } from "@clerk/clerk-sdk-node";
import { prisma } from "@/lib/prisma";

export const POST = async (req: any) => {
  const evt = req.body.evt as WebhookEvent;
  switch (evt.type) {
    case "user.created":
      const user = await prisma.user.create({
        data: {
          email: evt.data.email_addresses[0]?.email_address,
          username: evt.data.username,
          name: evt.data.first_name,
        },
      });
  }
};
