import React, { useState } from "react";

export default function FilterNav({ genre }) {
  function selectGenres(e) {
    genre(e.target.value);
  }

  return (
    <div className="filter-nav d-flex justify-content-between">
      <select
        id="genres"
        className="custom-select w-25"
        onChange={selectGenres}
      >
        <option>Genres</option>
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="80">crime</option>
        <option value="99">Documentary</option>
        <option value="18">Drama</option>
        <option value="14">Fantasy</option>
        <option value="10751">Family</option>
        <option value="36">History</option>
        <option value="27">Horror</option>
        <option value="9648">Mystery</option>
        <option value="10">Romance</option>
        <option value="53">Thriller</option>
        <option value="10752">War</option>
      </select>

      <div className="form-group">
        <input type="text" className="form-control" />
      </div>
    </div>
  );
}
