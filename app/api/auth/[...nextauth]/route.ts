import NextAuth from 'next-auth';
import LINE from 'next-auth/providers/line';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    LINE({
      clientId: process.env.LINE_CLIENT_ID ?? '',
      clientSecret: process.env.LINE_CLIENT_SECRET ?? '',
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
