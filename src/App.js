import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductList from './components/ProductList';

import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  // const [title, titleSet] = useState('Welcome to my App');
  // const [age, ageSet] = useState(30);

  // const clickMe = () => {
  //   titleSet('title Changed')
  //   ageSet(50)
  // }

  // const deleteProduct = (productId) => {
  //   const newProducts = products.filter(product => product.id !== productId);
  //   setProduct(newProducts);
  // }

  return (
    <div className='container'>
      <Router>
        <Routes>
            <Route path="/" element={<ProductList/>}/>
            <Route path="/add" element={<AddProduct/>}/>
            <Route path="/edit/:id" element={<EditProduct/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
