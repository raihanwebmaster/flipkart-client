import React from "react";
import "./style.css";
import Layout from "../../components/Layout";
import ProductStore from "./ProductStore";
import getParams from "../../utils/getParams";
import ProductPage from "./ProductPage";
const ProductListPage = (props) => {
  const renderProduct = () => {
    const params = getParams(props.location.search);
    let content = null;
    switch (params.type) {
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <ProductPage {...props} />;
        break;
      default:
        content = null;
    }
    return content;
  };
  return <Layout>{renderProduct()}</Layout>;
};

export default ProductListPage;
