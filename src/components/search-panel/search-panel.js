import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      term: "",
    };
    this.onSearchChange = (evt) => {
      const term = evt.target.value;
      this.setState({
        term: { term },
      });
      this.props.onSearchChange(term);
    };
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
