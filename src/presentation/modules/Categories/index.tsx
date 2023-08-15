import { useThemeProps } from "@mui/material";
import { CategoriesStruct, ShapeTypes } from "./Categories.types";
import CategoriesSquare from "./CategoriesSquare";
import { Fragment } from "react";
import CategoriesCircle from "./CategoriesCircle";

const Categories = (props: CategoriesStruct) => {
  return (
    <Fragment>
      {
        props.shape === ShapeTypes.SQUARE ?
          (<CategoriesSquare {...props} />)
          :
          (<CategoriesCircle {...props} />)
      }
    </Fragment>
  )
}
export default Categories;