const boardService = require("./board.service");

exports.getList = (req, res) => {
    const result = boardService.getFindAll();

    res.render("board/list.html", {
        list: result,
    });
};

exports.getWrite = (req, res) => {
    res.render("board/write.html");
};

exports.getView = (req, res) => {
    const { id } = req.query;
    const result = boardService.getFindOne(id);
    console.log(result);
    res.render("board/view.html", {
        ...result,
    });
};

exports.getModify = (req, res) => {
    const { id } = req.query;
    const result = boardService.getFindOneWithoutIncrement(id);
    res.render("board/modify.html", {
        ...result,
    });
};

exports.postWrite = (req, res) => {
    //req.body -> {title, writer, content}
    const { id } = boardService.create(req.body);
    // console.log(req.body);
    // res.json(result); // 나중에 redirect 로 바꾼다.

    res.redirect(`/boards/view?id=${id}`);
};

exports.postModify = (req, res) => {
    const { id } = req.query;
    boardService.modify(id, req.body);
    console.log(req.body);
    res.redirect(`/boards/view?id=${id}`);
};

exports.postDelete = (req, res) => {
    const { id } = req.query;
    boardService.delete(id);
    res.redirect("/boards/list");
};
