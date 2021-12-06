/*
  Warnings:

  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `avatar_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `events_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followers_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `following_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gists_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `html_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `node_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizations_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `received_events_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repos_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `site_admin` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starred_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscriptions_url` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "avatar_url" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "events_url" TEXT NOT NULL,
ADD COLUMN     "followers_url" TEXT NOT NULL,
ADD COLUMN     "following_url" TEXT NOT NULL,
ADD COLUMN     "gists_url" TEXT NOT NULL,
ADD COLUMN     "gravatar_id" TEXT,
ADD COLUMN     "html_url" TEXT NOT NULL,
ADD COLUMN     "node_id" TEXT NOT NULL,
ADD COLUMN     "organizations_url" TEXT NOT NULL,
ADD COLUMN     "received_events_url" TEXT NOT NULL,
ADD COLUMN     "repos_url" TEXT NOT NULL,
ADD COLUMN     "site_admin" TEXT NOT NULL,
ADD COLUMN     "starred_url" TEXT NOT NULL,
ADD COLUMN     "subscriptions_url" TEXT NOT NULL,
ADD COLUMN     "twitter_username" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "hireable" DROP NOT NULL;
