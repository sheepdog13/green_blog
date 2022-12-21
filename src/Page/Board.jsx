import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

const Board = () => {
    const boardList = useSelector((state)=>(state.board))
    const navigate = useNavigate();

    // 게시물의 이름을 클릭했을때 실행될 함수
    const toBoardPage = (id) => {
        navigate('/board/'+id)
    }
    return (  
        <>
            <Table striped>
                <thead>
                    <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map((board)=>(
                        <tr>
                            <td>{board.boardId}</td>
                            <td onClick={()=>{toBoardPage(board.boardId)}}>{board.title}</td>
                            <td>{board.userEmail}</td>
                            <td>{board.view}</td>
                        </tr>
                    ))}
                </tbody>
                </Table>
        </>
    );
}
 
export default Board;