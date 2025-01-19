"use client";
import products from "@/data/crafting/crafting-items.json";
import { useEffect, useRef, useState } from "react";

const CraftingTable = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [availableSubCategories, setAvailableSubCategories] = useState<
    string[]
  >([]);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const subCategoryRef = useRef<HTMLSelectElement>(null);

  const filterProducts = () => {
    const selectedCategory = categoryRef.current?.value;
    if (selectedCategory && selectedCategory !== "All") {
      const filtered = products.filter(
        (product) => product.Category === selectedCategory
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const filterSubCategory = () => {
    const selectedSubCategory = subCategoryRef.current?.value;
    if (selectedSubCategory && selectedSubCategory !== "All") {
      const filtered = products.filter(
        (product) =>
          product.subCategory === selectedSubCategory &&
          product.Category === categoryRef.current?.value
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const categories = products.reduce((acc, product) => {
    if (!acc.includes(product.Category)) {
      acc.push(product.Category);
    }
    return acc;
  }, [] as string[]);

  categories.sort();

  useEffect(() => {
    const subCategories = products.reduce((acc, product) => {
      if (!acc.includes(product.subCategory)) {
        acc.push(product.subCategory);
      }
      return acc;
    }, [] as string[]);

    subCategories.sort();
    setAvailableSubCategories(subCategories);
  }, [filteredProducts]);

  return (
    <div className="custom-table-container">
      {/* CATEGORY SELECT */}
      <div className="select-box">
        <label htmlFor="category">Category: </label>
        <select
          name="category"
          id="category"
          ref={categoryRef}
          onChange={filterProducts}
          defaultValue={"All"}
        >
          <option value="All">All</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="select-box">
        <label htmlFor="subCategory">Subcategory: </label>
        <select
          name="subCategory"
          id="subCategory"
          ref={subCategoryRef}
          onChange={filterSubCategory}
          defaultValue={"All"}
        >
          <option value="All">All Subcategories</option>
          {availableSubCategories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Tools</th>
            <th>Requirements</th>
            <th>Workstation</th>
            <th>XP</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, i) => (
            <tr key={i} className="centered">
              <td dangerouslySetInnerHTML={{ __html: product.Product }}></td>
              <td
                dangerouslySetInnerHTML={{ __html: product.Ingredients }}
              ></td>
              <td dangerouslySetInnerHTML={{ __html: product.Tools }}></td>
              <td
                dangerouslySetInnerHTML={{ __html: product.Requirements }}
              ></td>
              <td
                dangerouslySetInnerHTML={{ __html: product.Workstation }}
              ></td>
              <td dangerouslySetInnerHTML={{ __html: product.XP }}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CraftingTable;
