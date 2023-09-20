import React from "react";

const Summary = ({ content, ...otherProps }) => (
  <div
    className="summary px-2 py-1 text-secondary"
    dangerouslySetInnerHTML={{ __html: content }}
    {...otherProps}
  ></div>
);

export default Summary;
