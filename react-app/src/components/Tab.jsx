import PropTypes from "prop-types";

const Tab = ({ header, data, onRemove }) => {
  return (
    <table className="table tableStriped">
      <thead>
        <tr>
          {header.map((item) => {
            return (
              <th scope="col" key={item}>
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((product, id) => {
          return (
            <tr key={id}>
              {product.map((value, id) => {
                return <td key={id}>{value}</td>;
              })}
              <td>
                <button
                  onClick={() => {
                    console.log(id);
                    onRemove(id);
                  }}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          {header.map((item, i) => {
            // Calculate total only for the third column
            const total =
              i === 1
                ? data.reduce((acc, product) => acc + parseInt(product[i]), 0)
                : null;

            return (
              <td key={i}>
                {
                  i === 1 ? `Total: ${total}` : "\u00A0" // Use a non-breaking space for empty cells to maintain column width
                }
              </td>
            );
          })}
        </tr>
      </tfoot>
    </table>
  );
};

Tab.propTypes = {
  header: PropTypes.array,
  data: PropTypes.array,
  onRemove: PropTypes.func,
};

export default Tab;
