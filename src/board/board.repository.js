const Board = require("./board.entity");

const data = [];

const latestId = () => {
    return data.length + 1;
};

exports.findAll = () => {
    return data;
};

exports.findOne = (id) => {
    const [board] = data.filter((row) => {
        return row.id === id;
    });

    return board;
};

exports.incrementHit = (id) => {
    const index = data.findIndex((v) => v.id === id);
    if (index === -1) throw new Error();
    data[index].hit += 1;
};

exports.create = (title, writer, content) => {
    const id = latestId();
    const board = new Board(id, title, writer, content);
    data.push(board);

    return board;
};

exports.modify = (id, title, writer, content) => {
    const index = data.findIndex((v) => v.id === parseInt(id));
    // Number(id)
    if (index === -1) throw new Error("ID 설정에 오류있으니 확인해볼 것");

    data[index].title = title;
    data[index].writer = writer;
    data[index].content = content;
};
// update가 생성되면 incrementHit 필요없음. 이 기능을 update에 넣기

exports.delete = (id) => {
    const index = data.findIndex((v) => v.id === parseInt(id));
    // Number(id)
    if (index === -1) throw new Error("ID 설정에 오류있으니 확인해볼 것");
    data.splice(index, 1);
};
// 다 작성하고 깃허브 주소 교수님께 보내기
