import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';
import authConfig from './auth.config';
import client from './lib/db-mongo-client';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client, {
    databaseName: 'GUYU',
  }),
  session: { strategy: 'jwt' },
  ...authConfig,
});
