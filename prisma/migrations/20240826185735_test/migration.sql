/*
  Warnings:

  - You are about to drop the column `companyId` on the `JobPosting` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `JobPosting` table. All the data in the column will be lost.
  - Added the required column `title` to the `JobPosting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobPosting" DROP COLUMN "companyId",
DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;
