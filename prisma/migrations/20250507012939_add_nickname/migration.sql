/*
  Warnings:

  - Added the required column `nickname` to the `UserEntity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserEntity" ADD COLUMN     "nickname" TEXT NOT NULL;
