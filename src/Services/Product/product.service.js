import { products } from "./mock/dummy_data";
import camelize from "camelize";

export const productRequest = () => {
  return new Promise((resolve, reject) => {
    const mock = products;
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const productTransform = (result) => {
  const newResult = camelize(result);
  return newResult;
};

// productRequest()
//   .then(productTransform)
//   .then((transformedResponse) => {
//     console.log(transformedResponse);
//   })
//   .catch((err) => {
//     console.log("error");
//   });
