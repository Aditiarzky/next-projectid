/*
  Warnings:

  - Made the column `deskripsi` on table `Komik` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Komik" ALTER COLUMN "deskripsi" SET NOT NULL;
