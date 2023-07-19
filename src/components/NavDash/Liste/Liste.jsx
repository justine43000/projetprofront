import React, { useState, useEffect } from "react";
import "./Liste.css"

export default function Liste(props) {
    const handleChange = (e) => {
        this.setState({ selectedValue: e.target.value })
    }
    return (
        <div>
            <select onChange={(e) => handleChange(e)}>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
            </select>
        </div>
    );
}
