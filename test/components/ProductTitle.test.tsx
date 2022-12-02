import React from "react";
import renderer from "react-test-renderer";
import { ProductTitle } from '../../src/components/ProductTitle';


describe('ProductTitle', () => {
   
    test( 'debe mostraar el componente con el titulo personalizado', ()=>{
        const wrapper = renderer.create (
            <ProductTitle title ="Custom product"   />

            
        )

        //console.log(wrapper.toJSON());
        expect( wrapper.toJSON()).toMatchSnapshot();
    })


});
