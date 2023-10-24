import React from "react";

export const Form = () => {
  return (
    <div>
      <h2>New book</h2>
      <div class="field">
        <label></label>
        <input type="text" name="title" />
      </div>

      <div class="field">
        <label></label>
        <textarea name="body"></textarea>
      </div>

      <div class="actions">
        <button>submit</button>
      </div>
    </div>
  );
};
