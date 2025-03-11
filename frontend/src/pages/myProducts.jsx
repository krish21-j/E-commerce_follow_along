import { useState } from "react";
import Myproduct from "../components/auth/myproduct";
import NavBar from "../components/auth/nav";

export default function MyProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        setProducts([]);
        
        try {
            const res = await fetch(`http://localhost:8000/api/v2/product/my-products?email=${email}`);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setProducts(data.products);
        } catch (err) {
            console.error("Error fetching products:", err);
            setError(err.message);
        }
        setLoading(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) fetchProducts();
    };

    return (
        <>
            <NavBar />
            <div className="w-full min-h-screen bg-neutral-800 flex flex-col items-center p-6">
                <h1 className="text-3xl text-white py-6">My Products</h1>
                <form onSubmit={handleSubmit} className="mb-6">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="p-2 rounded-md border border-gray-300 text-black"
                        required
                    />
                    <button 
                        type="submit" 
                        className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Search Products
                    </button>
                </form>
                
                {loading && <div className="text-center text-white">Loading products...</div>}
                {error && <div className="text-center text-red-500">Error: {error}</div>}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
                    {products.map((product) => (
                        <Myproduct key={product._id} {...product} />
                    ))}
                </div>
            </div>
        </>
    );
}
