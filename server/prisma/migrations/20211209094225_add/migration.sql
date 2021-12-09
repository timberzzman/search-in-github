-- AlterTable
ALTER TABLE "User" ADD COLUMN     "collaborators" INTEGER,
ADD COLUMN     "disk_usage" INTEGER,
ADD COLUMN     "owned_private_repos" INTEGER,
ADD COLUMN     "plan" JSONB,
ADD COLUMN     "private_gists" INTEGER,
ADD COLUMN     "total_private_repos" INTEGER,
ADD COLUMN     "two_factor_authentication" BOOLEAN;
