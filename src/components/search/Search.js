import React, { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";
import '../../styles/Search.css';

function Search({ details }) {
    const [searchField, setSearchField] = useState("");

    //convert title, name, and tags to lowercase
    const filteredListings = details.filter(
        listing => {
            return (
                listing
                    .title
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                listing
                    .name
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                listing
                    .tag1
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) ||
                listing
                    .tag2
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    function searchList() {
        return (
            <Scroll>
                <SearchList filteredListings={filteredListings} />
            </Scroll>
        );
    }

    return (
        <section>
            <div>
                <input
                    className="search-bar"
                    type="search"
                    placeholder="Search Listings"
                    onChange={handleChange}
                />
                <form>
                    <select className="list-sort">
                        <option value="all">All Listings</option>
                        <option value="mine">Only My Listings</option>
                        <option value="others">Other Listings</option>
                    </select>
                </form>
            </div>
            <br /><br />
            {searchList()}
        </section>
    );
}

export default Search;