-- CreateTable
CREATE TABLE "Komik" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "deskripsi" TEXT,
    "genre" TEXT NOT NULL,

    CONSTRAINT "Komik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "id" SERIAL NOT NULL,
    "Nama" TEXT NOT NULL,
    "isi" TEXT NOT NULL,
    "komikId" INTEGER NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_komikId_fkey" FOREIGN KEY ("komikId") REFERENCES "Komik"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
