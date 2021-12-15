import React from "react";
import JobItem from "./search/JobItem";

function FilterList({ filteredListings }) {
    const filtered = filteredListings.map(listing => <JobItem key={listing.id} listing={listing} />);
    return (
        <div>
            {filtered}
        </div>
    );
}

export default FilterList;