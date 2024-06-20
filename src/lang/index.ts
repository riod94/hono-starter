import messages from "./messages";

const t = (key: string, replace: { [key: string]: string } = {}, locale?: string): string => {
    if (!locale) {
        locale = 'en';
    }
    const translation = messages[locale]?.[key] || key;
    if (!translation) {
        return key;
    }

    let translatedText = translation;
    for (const [placeholder, value] of Object.entries(replace)) {
        translatedText = translatedText.replace(`:${placeholder}`, value);
    }

    return translatedText;
}

export {
    t
}