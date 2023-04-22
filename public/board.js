async function getBoard() {
    try{
        const res = await axios.get('/board');
        const boards = res.data;
        console.log(boards);
        const tbody = document.querySelector('#board-list div');
        tbody.innerHTML = '';
        boards.map(function (board){
            const row = document.createElement('div');
            row.addEventListener('click', () => {
                getComment(board.board_no);
            });

            let td = document.createElement('div');
            td.textContent = board.board_no;
            td.textContent = board.title;
            td.textContent = board.store_name;
            td.textContent = board.star;
            td.textContent = board.nick;
            td.textContent = board.content;
            row.appendChild(td);
            tbody.appendChild(row);

        })
    } catch (err){
        console.error(err);
    }
}

document.getElementById('board').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const storename = e.target.store_name.value;
    const star = e.target.star.value;
    const nick = e.target.nick.value;
    const content = e.target.content;
    if(!title) {
        return alert('제목을 입력하세요');
    }
    if(!storename){
        return alert('가게이름을 입력하세요');
    }
    if(!star){
        return alert('별점을 입력하세요');
    }
    if(!nick){
        return alert('닉네임을 입력하세요');
    }
    if(!content){
        return alert('내용을 입력하세요');
    }
    try{
        await axios.post('/board', {title, store_name, star, nick, content});
        getBoard();
    } catch (err){
        console.error(err);
    }
    e.target.title.value = '';
    e.target.store_name.value = '';
    e.target.star.value = '';
    e.target.nick.value = '';
    e.target.content.value = '';
});

