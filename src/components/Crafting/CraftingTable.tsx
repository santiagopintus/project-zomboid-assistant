import products from "@/data/crafting/crafting-items.json";

const CraftingTable = () => {
  return (
    <div className="custom-table-container">
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
          {products.map((product, i) => (
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
