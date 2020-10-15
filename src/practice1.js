const parseData = ({data, column}) => {

    return data.map((info) => (
        Object.assign({}, ...(info.map((value, index) => (
            {[column[index].name]: value}
        ))))
    ));
};
export { parseData };
