import { render, screen } from "@testing-library/react";
import ProductList from "../ProductList";
import React from "react";

// first approach.//

describe("ProductList", () => {
  it("should render list of products or no products at all ", async () => {
    render(<ProductList products={[]} />);
    const productlist = await screen.findByTestId("product-item");
    //using find cause it is async
    //using by testid cause it is normal to not pass any data
    screen.debug();
    expect(productlist).toBeInTheDocument();
  });
});
//  approach without mocks is not good because :
//  1. request could be slow
//  2. request cost money [in case we send request to our database [90%] ]
//  3. test dependant on something external

// problem : in this case should be testing our frontend react app not the api endpoint.
// solution: is to use mock request. and mock the data that should come back.
