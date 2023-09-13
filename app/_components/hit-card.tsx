import { useHits } from "react-instantsearch-hooks-web";
import { Card } from "@/components/ui/card";
import { ProductHit } from "./types";
import Image from "next/image";

const HitCard = ({ hit }: { hit: ProductHit }) => {
  return (
    <Card className="p-4 bg-primary/10 rounded shadow-md">
      <Image
        src={hit.imageUrl ?? ""}
        alt={hit.productName}
        className="w-full h-64 object-cover rounded"
        width={256}
        height={256}
      />
      <h2 className="mt-2 text-lg font-semibold">{hit.productName}</h2>
      <p className="mt-1 text-gray-500">{hit.productOwner}</p>
      <p className="mt-2 text-lg font-bold">${hit.suppliers[0].price}</p>
    </Card>
  );
};

const Hits = () => {
  const { hits } = useHits<ProductHit>();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {hits.map((hit) => (
        <HitCard key={hit.objectID} hit={hit} />
      ))}
    </div>
  );
};

export default Hits;
