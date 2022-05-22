import { useFormik } from "formik";
import { Config } from "../config.model";
import { FC } from "react";

const ConfigCard: FC<{
  defaultConfig: Config;
  onSubmit: (values: Config) => void;
}> = ({ defaultConfig, onSubmit }) => {
  const formik = useFormik<Config>({
    initialValues: defaultConfig,
    onSubmit: (values) => onSubmit(values)
  });

  return (
    <form className="card" onSubmit={formik.handleSubmit}>
      <div className="field">
        <label htmlFor="id">Chain ID</label>
        <input
          id="chainId"
          value={formik.values.chainId}
          onChange={formik.handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="id">User 1</label>
        <input
          id="user1"
          value={formik.values.user1}
          onChange={formik.handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="id">User 2</label>
        <input
          id="user2"
          value={formik.values.user2}
          onChange={formik.handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ConfigCard;
