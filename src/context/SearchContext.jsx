import { createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    return (
        <SearchContext.Provider value={{ searchTerm, handleSearchChange }}>
            {children}
        </SearchContext.Provider>
    );
};


export { SearchContext, SearchProvider }