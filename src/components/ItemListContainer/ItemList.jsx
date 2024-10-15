import Item from "./Item"
import Loading from "../Loading/Loading"

const ItemList = ({ products, loading }) => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {
                loading ? (
                    <>
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                    </>
                ) : (
                    products.map((product) => (
                        <Item product={product} key={product.id} />
                    ))
                )
            }
        </div>
    )
}

export default ItemList
