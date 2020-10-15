const inject = (items, sections) => {
    sections.forEach((value, index) => (
        items.splice(value.index + index, 0, value.content)
    ));
    return items;
}
export { inject };
