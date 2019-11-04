import React from "react";
import AuthorCard from "./AuthorCard";

const AuthorList = props => {
  const authorList = props.authors.map(author => (
    <AuthorCard author={author} key={author.first_name} />
  ));

  return (
    <div className="content col-10">
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorList}</div>
      </div>
    </div>
  );
};

export default AuthorList;
