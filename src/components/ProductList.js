import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const response = await fetch('http://localhost:4000/product');
        const data = await response.json();
        setProduct(data);
    }

    const deleteProduct = async(id) => {
        await fetch(`http://localhost:4000/product/${id}`, {
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json'
            }
        });

        fetchData();
    }

    return (
        <div>
            <Link to="/add" className="button is-primary mt-5">Add new Product</Link>
            <div className="table-responsive">
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
                                    <button onClick={()=> deleteProduct(product.id)} className="button is-small is-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}


export default ProductList