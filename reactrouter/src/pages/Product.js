import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';


const Product = () => {
    // 4 - Rota dinâmica
    const { id } = useParams()

    // 5 - Carregamento dinâmico de dados:
    const url = 'http://localhost:3000/product/' + id;

    const { data: product, loading, error } = useFetch(url)

    console.log(product)

  return (
    <>
        <p>Id do produto: {id}</p>
        {loading && <p>Carregando o produto...</p>}
        {error && <p>Houve algum erro ao carregar o produto</p>}
        {product && (
            <div>
                <h3>{product.name}</h3>
                <p>R${product.price}</p>
                {/* 6 - Nested routes  */}
                <Link to={`/product/${id}/info`}>Mais informações</Link>
            </div>
            
           
        )}
    
    </>
  )
}

export default Product