import Image from 'next/image';

function ArticleCard() {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <Image
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}

export default function LatestArticles() {
  return (
    <div className="flex flex-col p-8 gap-4 bg-base-300">
      <h2 className="text-2xl font-bold">Informative Articles</h2>
      <p className="text-muted-foreground">
			Read our collection of articles and blog posts to stay informed.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
}
