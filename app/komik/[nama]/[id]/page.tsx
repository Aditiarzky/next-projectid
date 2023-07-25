import { PrismaClient } from "@prisma/client";
import { headers } from 'next/headers';

const prisma = new PrismaClient();

const getKomikid = async ({params}: {params: {id: string}}) => {
  const res = await prisma.komik.findUnique({
      where: { id: Number(params.id) },
      include: { chapters: true },
  });
  return res;
};

const ComicPage = async ({params}: {params: {id: string}}) => {
  const comics = await getKomikid({params});
  return (
    <div>
      {comics?.judul}
      {comics?.chapters.map((comic ) => (
        <li key={comic.id}>{comic.Nama}</li>
      ))}
    </div>
  );
};

export default ComicPage;
