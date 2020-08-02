import React from "react";

import ListGroupItem from "react-bootstrap/ListGroupItem";

import Input from "../common/Input";
import SearchIcon from "../SearchIcon";

const GroupHeader = ({ title, onSearchInputChange }) => {
  return (
    <ListGroupItem id="title-row">
      <h2 className="i-b">{title}</h2>
      <Input
        onChange={onSearchInputChange}
        className="i-b"
        placeholder="Search ..."
      />
      <SearchIcon className="search-icon" width={24} height={24} />
    </ListGroupItem>
  );
};

export default GroupHeader;
