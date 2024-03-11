import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import  Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from '@/libs/prismadb';
import bcrypt from 'bcrypt';


export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
        name: 'credentials',
        credentials: {
            email: {
                label: 'email',
                type: 'email'
            },
            password: {
                label: 'password',
                type: 'password'
            },
        },
        async authorize(credentials){
            if(!credentials?.email || !credentials.password){
                throw new Error('Неправильная почта или пароль')
            }

            const user = await prisma.user.findUnique({
                where: {
                    email: credentials.email
                }
            })

            if(!user || !user?.hashedPassword) {
                throw new Error('Неправильная почта или пароль')
            }

            const isCorrectPassword = await bcrypt.compare(
                credentials.password,
                user.hashedPassword
            )

            if(!isCorrectPassword){
                throw new Error('Неправильная почта или пароль')
            }

            return user;
        },
    }),
  ],
  pages: {
    signIn: '/login'
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
});