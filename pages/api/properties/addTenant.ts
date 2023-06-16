import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import prisma from '../../../prisma/client';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if(req.method === 'POST') {
        //check if there is a user session
        const session = await getServerSession(req, res, authOptions)
        if(!session) {
            return res.status(401).json({message: 'Please sign in to add a tenant'})
        }

        const prismaUser = await prisma.user.findUnique({
            where: { email: session?.user?.email },
        });

        const { name, propertyId, lease, rent } = req.body.data

        if (!name.length) {
            return res.status(401).json({ message: "Please list the tenants" })
          }

        //add tenants
        try {
            const result = await prisma.tenant.create({
            data: {
                name,
                propertyId,
                lease,
                rent,
                userId: prismaUser.id
            },
        });
        res.status(200).json(result);
      } catch (err) {
        res.status(403).json({ err: 'Error has occured while adding tenants' });
      }

    }
  }