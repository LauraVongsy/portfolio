import React, { useContext } from "react";

import { languageOptions } from "../languages/index";
import { LanguageContext } from "../containers/Language";

const LanguageSelector = () => {
    const { userLanguage, userLanguageChange } = useContext(LanguageContext);

    // set selected language by calling context method
    const handleLanguageChange = (e) => userLanguageChange(e.target.value);

    return (
        <select
            className="text-gray-600 "
            onChange={handleLanguageChange}
            value={userLanguage}
        >
            {Object.entries(languageOptions).map(([id, name]) => (
                <option key={id} value={id}>
                    {name}
                </option>
            ))}
        </select>
    );
};

export default LanguageSelector;
