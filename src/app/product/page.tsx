import { getData } from "@/services/products";
import Link from "next/link";
type ProductPageProps = {
  params: {
    slug?: string[];
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const slug = params.slug ?? []; // <-- default slug array
  const products = await getData("http://localhost:3000/api/product");
//   console.log(products);
  return (
    <div className="grid grid-cols-4 mt-5 place-items-center">
      {/* <h1>{slug.length > 0 ? "Detail product page" : "Product page"}</h1> */}

      {products.data.length > 0 && 
      products.data.map((product:any) => (
        
<Link href={`/product/detail/${product.id}`} key = {product.id} className="w-10/12 max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs my-2">
   
        <img className="rounded-base mb-6 object-cover h-96 w-f" 
        src={product.image} alt="product image" />
  
    <div>
        <div className="flex items-center space-x-3 mb-6">
            <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm"></span>
        </div>
        
            <h5 className="text-xl text-heading font-semibold tracking-tight truncate">{product.name}</h5>
        
        <div className="flex items-center justify-between mt-6">
            <span className="text-3xl font-extrabold text-heading">$ {product.price}</span>
            <button type="button" className="inline-flex items-center  text-white bg-black hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xl font-medium leading-5 rounded-xl text-sm px-3 py-2 focus:outline-none">
                <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/></svg>
                Add to cart
            </button>
        </div>
    </div>
</Link>

      ))}

      {slug.length > 0 && (
        <div>
          {slug.length <= 3 && <p>Category : {slug[0]}</p>}
          {slug.length <= 3 && <p>Gender : {slug[1]}</p>}
          {slug.length <= 3 && <p>ID : {slug[2]}</p>}
        </div>
      )}
    </div>
  );
}
