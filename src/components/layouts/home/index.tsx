import React, { useEffect } from "react";
import ProductCard from "@/components/molecules/productCard";
import { getProducts } from "@/store/products";
import { HomeContainer, ProductsList } from "./home.styles";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { customDispatchEvent } from "@/store/events/dispatchEvents";

import viewData from "../../../mock/home-view.json";
import TextBanner from "@/components/atoms/textBanner";
import Carousel from "@/components/atoms/carousel";
import Gallery from "@/components/atoms/gallery";
import { ProductModel } from "@/store/products/product.type";
import BottomCards from "@/components/molecules/bottomCards";

const Home = () => {
  const dispatch = useAppDispatch();
  const { products, loadingProducts } = useAppSelector(
    (state) => state.products
  );

  const methods = {
    addToCart: (product: ProductModel) => {
      customDispatchEvent({
        name: "ADD_PRODUCT_IN_CART",
        detail: { ...product, quantity: 1 },
      });
    },
  };

  useEffect(() => {
    !products?.length && dispatch(getProducts());
  }, []);

  return (
    <HomeContainer>
      {viewData?.content &&
        viewData.content.map((content, index) => {
          switch (content.component) {
            case "cinta-texto": {
              return (
                <TextBanner
                  key={`home_content_${index}`}
                  image={content.image}
                  mobileImage={content.mobileImage}
                  altDescription={content.desription}
                />
              );
            }
            case "carrousel-home": {
              return (
                <Carousel
                  key={`home_content_${index}`}
                  items={content.items || []}
                  itemsPerRow={
                    (typeof content.itemsPerRow === "string"
                      ? Number.parseInt(content.itemsPerRow)
                      : content.itemsPerRow) || 1
                  }
                  styles={{
                    padding: content.width === 100 ? "0" : "0 1rem",
                    maxWidth:
                      content.width === 100 ? "100%" : `${content.width}rem`,
                  }}
                />
              );
            }
            case "galeria-home": {
              return (
                <Gallery
                  key={`home_content_${index}`}
                  items={content.items || []}
                  itemsPerRow={
                    (typeof content.itemsPerRow === "string"
                      ? Number.parseInt(content.itemsPerRow)
                      : content.itemsPerRow) || 1
                  }
                  carouselMode={content.carouselMode}
                  styles={{
                    maxWidth: "80rem",
                  }}
                />
              );
            }
          }
        })}

      <ProductsList>
        {!loadingProducts &&
          products &&
          products.map((product: ProductModel) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={(product: ProductModel) => {
                methods.addToCart(product);
              }}
            />
          ))}
      </ProductsList>
      <BottomCards />
    </HomeContainer>
  );
};
export default Home;
