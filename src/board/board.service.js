const boardRepository = require("./board.repository");

exports.create = (data) => {
    // data = {title: "dd", writer: "dd", content: "dd"}
    const { title, writer, content } = data;
    const result = boardRepository.create(title, writer, content);
    return result;
};

exports.modify = (id, data) => {
    console.log(data);
    const { title, writer, content } = data;

    const result = boardRepository.modify(id, title, writer, content);
    // console.log(result);
    return result;
};

exports.delete = (id) => {
    const result = boardRepository.delete(id);

    return result;
};

exports.getFindOneWithoutIncrement = (board_id) => {
    const id = parseInt(board_id);
    const result = boardRepository.findOne(id);
    return result;
};

exports.getFindOne = (board_id) => {
    const id = parseInt(board_id);
    const result = boardRepository.findOne(id);
    boardRepository.incrementHit(id);
    return result;
};

exports.getFindAll = () => {
    const result = boardRepository.findAll();
    return result;
};
