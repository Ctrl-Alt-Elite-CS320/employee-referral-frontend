import React from "react";
import JobItem from "./JobItem";

function SearchList({ filteredListings }) {
    const filtered = filteredListings.map(listing => <JobItem key={listing.id} listing={listing} />);
    return (
        <div>
            {filtered}
        </div>
    );
}

export default SearchList;