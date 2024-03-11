import bcrypt from "bcrypt"
import prisma from '@/libs/prismadb'
import { NextResponse } from "next/server"

export async function Post(request : Request) {
    if (request.method === 'POST') {
        const body = await request.json();
        const {name, email, password} = body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name, email, hashedPassword
            }
        });

        return NextResponse.json(user);
    }
}