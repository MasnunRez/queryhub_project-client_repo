import React from "react";

const AddQueries = () => {
  return (
    <div>
      <h1>Hello</h1>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Insert your product info</legend>

        <label className="label">Product Name</label>
        <input type="text" className="" placeholder="My awesome page" />

        <label className="label">Product Brand</label>
        <input type="text" className="" placeholder="my-awesome-page" />

        <label className="label">Product Image URL</label>
        <input type="text" className="" placeholder="Name" />

        <label className="label">Query Title</label>
        <input type="text" className="" placeholder="Name" />

        <label className="label">Boycotting Reason Details</label>
        <input type="text" className="" placeholder="Name" />
        <button type="submit">Add Query</button>
      </fieldset>
    </div>
  );
};

export default AddQueries;
