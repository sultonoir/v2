import { createTRPCRouter, publicProcedure } from "@/app/api/trpc/trcp";

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.reservation.findMany();
  }),
});
