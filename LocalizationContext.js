import React from 'react';
import i18n from 'i18n-js';

export const LocalizationContext = React.createContext({
    locale: i18n.locale,
    setLocale: () => {},
});

export const LocalizationProvider = ({children}) => {
    const [locale, setLocale] = React.useState(i18n.locale);

    const setAndPersistLocale = newLocale => {
    i18n.locale = newLocale;
    setLocale(newLocale);
    // TODO: Persist the selected locale in local storage or remote server
};

return (
    <LocalizationContext.Provider value={{locale, setLocale: setAndPersistLocale}}>
        {children}
    </LocalizationContext.Provider>
    );
};
