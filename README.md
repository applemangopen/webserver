# controller, service, repository, model or entity

Controller -> Service -> Repository -> Entity or Model

board.route.js
board.controller.js - 요청, 응답
board.service.js - 데이터 가공하는 역할
board.repository.js - 데이터를 저장하는 역할
board.entity.js - 저장할 데이터의 규격

# Router 나누기 샘플 코드 제작

-   GET
-   GET /boards/list
-   GET /boards/write
-   GET /boards/view
-   GET /boards/modify

-   POST /boards/write
-   POST /boards/modify
-   POST /boards/delete

-   GET /users/login
-   GET /users/join
-   POST /users/login
-   POST /users/join
