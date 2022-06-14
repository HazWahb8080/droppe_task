import { Products } from "../../typings";

const mockResponse: Products = [
  {
    id: 1,
    title: "Product 1",
    description: "This is a product description",
    price: 100,
    rating: {
      rate: 5,
      count: 10,
    },
  },
];

export default {
  fetch: jest.fn().mockResolvedValue(mockResponse),
};
