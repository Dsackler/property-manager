/*
  Warnings:

  - Added the required column `propertyImage` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Made the column `lease` on table `Tenant` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "propertyImage" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tenant" ALTER COLUMN "lease" SET NOT NULL,
ALTER COLUMN "lease" SET DATA TYPE TEXT;
