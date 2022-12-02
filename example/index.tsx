import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from '../dist/components/index';


const product = {
  id:'1',
  title:'Coffee-Mug',
  //img:'./coffee-mug.png'
}

const App = () => {
  return (
    <>
      <ProductCard  key={ product.id }
                      product={ product } 
                      initialValues={{
                      count:5,
                      maxCount:10 
                      }}
                      >
                        {
                          ( args )=>(
                            <>
                              <ProductImage />
                              <ProductTitle />
                              <ProductButtons />
                              
                            </>
                          )
                        }
        </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
