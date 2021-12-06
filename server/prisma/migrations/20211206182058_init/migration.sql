-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "login" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "blog" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hireable" BOOLEAN NOT NULL,
    "bio" TEXT NOT NULL,
    "public_repos" INTEGER NOT NULL,
    "public_gists" INTEGER NOT NULL,
    "followers" INTEGER NOT NULL,
    "following" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
