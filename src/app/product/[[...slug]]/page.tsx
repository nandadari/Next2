import { use } from "react";

type DetailProductPageProps = {
  params: {
    slug?: string[];
  };
};

export default function DetailProductPage(props: DetailProductPageProps) {
  const { slug = [] } = use(props.params);  // <-- default array

  // Uncomment the following if you want to enforce a minimum slug length
  // if (slug.length < 3) {
  //   return (
  //     <div>
  //       <h1>Detail Product Page</h1>
  //       <p>Invalid URL format. Example: /product/shoes/men/123</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1>{slug.length > 0 ? "Detail product page" : "product page"}</h1>
      {slug.length > 0 && (
        <div>
          {slug.length <= 3 && <p>Category : {slug[0]}</p>}
          {slug.length <= 3 && <p>Gender : {slug[1]}</p>}
          {slug.length <= 3 && <p>id : {slug[2]}</p>}

        </div>
      )}
    </div>
  );
}
