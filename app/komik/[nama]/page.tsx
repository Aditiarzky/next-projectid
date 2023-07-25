import { headers } from 'next/headers';

const ComicNamePage = async ({params} : any) => {
  return (
    <div>
        {params.nama}
    </div>
  );
};

export default ComicNamePage;
