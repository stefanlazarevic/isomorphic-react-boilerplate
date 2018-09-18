export default (html, body, helmet) => {
    const htmlReplacementMap = {
        '<!-- ::HTML_ATTRIBUTES:: -->': helmet.htmlAttributes.toString(),
        '<!-- ::BODY_ATTRIBUTES:: -->': helmet.bodyAttributes.toString(),
        '<!-- ::BASE:: -->': helmet.base.toString(),
        '<!-- ::TITLE:: -->': helmet.title.toString(),
        '<!-- ::META:: -->': helmet.meta.toString(),
        '<!-- ::STYLE:: -->': helmet.style.toString(),
        '<!-- ::LINK:: -->': helmet.link.toString(),
        '<!-- ::NO_SCRIPT:: -->': helmet.noscript.toString(),
        '<!-- ::SCRIPT:: -->': helmet.script.toString(),
        '<!-- ::BODY:: -->': body,
    };

    for (const key in htmlReplacementMap) {
        html = html.replace(key, htmlReplacementMap[key]);
    }

    return html;
};
