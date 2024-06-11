import { gql, useQuery } from "@apollo/client";

const qdata = gql`
      query GetProduct{
  products{
 data{
  attributes{
    name,
    type
  }
}
  }
}
    `


const Products = () => {
    const { data, error, loading } = useQuery(qdata)
    console.log(data)
    return (
        <div className="mx-10">
            {
                data?.products?.data?.map(dat=><div>
                    <h1>name: {dat?.attributes.name}</h1>
                    <h1>type: {dat?.type}</h1>
                </div>)
            }
            
        </div>
    );
};

export default Products;