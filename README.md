# WT-Product-Card
Este es un paquete de pruebas de despliegue en NPM

### Waldo Torres

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'wt-product-card';
```

```
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
```