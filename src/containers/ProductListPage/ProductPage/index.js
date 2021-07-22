import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductPage } from "../../../actions";
import getParams from "../../../utils/getParams";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Card from "../../../components/UI/Card/Card";
const ProductPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log(product);
  const { page } = product;
  useEffect(() => {
    const params = getParams(props.location.search);
    console.log({ params });
    const payload = {
      params,
    };
    dispatch(getProductPage(payload));
  }, []);

  return (
    <div style={{ margin: "0 10px" }}>
      <h3>{page.title}</h3>
      <Carousel renderThumbs={() => {}}>
        {page.banners &&
          page.banners.map((banner, index) => (
            <a
              href={banner.navigateTo}
              style={{ display: "block" }}
              key={index}
            >
              <img src={banner.img} alt={banner.title} />
            </a>
          ))}
      </Carousel>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", margin:"5px"}}>
        {page.products &&
          page.products.map((product, index) => (
            <Card key={index} style={{ width: "400px" ,height: "200px", margin: "0 5px"}}>
              <img style={{width: '100%', height:"100%"}}  src={product.img} alt="" />
            </Card>
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
