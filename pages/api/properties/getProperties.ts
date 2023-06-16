import prisma from '../../../prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === "GET") {
      try {
        const data = await prisma.property.findMany({
          include: {
            address: true,
            user: true,
            tenants: true,
            propertyImage: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        })
        return res.status(200).json(data)
      } catch (err) {
        res.status(403).json({ err: "Error has occured while retrieving properties" })
      }
    }
  }