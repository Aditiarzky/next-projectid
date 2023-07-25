
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getKomik = async () => {
    const res = await prisma.komik.findMany();
    return res;
};

const List = async () => {
    const comics = await getKomik();
    return (
        <div>
        <h2>List of Comics</h2>
        <ul>
            {comics.map((comic, index) => (
            <li key={comic.id}>
                <Link href={`/komik/${comic.judul}/${comic.id}`}>{comic.judul}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default List;
