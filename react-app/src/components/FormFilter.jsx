import prototype from "prop-types";

const FormFilter = ({ onSelect }) => {
  const handleChange = (event) => {
    // Extract the value from the event object
    const value = event.target.value;
    // console.log(value);
    // Call the onSelect function with the selected value
    onSelect(value);
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="filter" className="form-label">
            Filter:
          </label>
          <select
            id="filter"
            name="filter"
            className="form-control"
            onChange={handleChange}
          >
            <option value="All">All</option>
            <option value="Apple">Apple</option>
            <option value="Banana">Banana</option>
            <option value="Orange">Orange</option>
          </select>
        </div>
      </form>
    </div>
  );
};

FormFilter.propTypes = {
  onSelect: prototype.func,
};

export default FormFilter;
