import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const Form = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            name="name"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            price
          </label>
          <input
            {...register("price")}
            type="number"
            id="price"
            name="price"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
