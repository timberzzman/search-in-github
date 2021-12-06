/*
  Warnings:

  - Changed the type of `site_admin` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "site_admin",
ADD COLUMN     "site_admin" BOOLEAN NOT NULL;
