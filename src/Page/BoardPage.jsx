import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBoard } from "../modules/board";

const BoardPage = () => {
    // params을 통해서 board의 boardId값전달
    // 객체로 가져와야한다 {id} O, id X
    const {id} = useParams();
    const boardList = useSelector((state)=>(state.board))
    // board의 내용중에 하나만 찾아서 가져오기
    // 배열의 find( return 값 : 배열값중 하나만 출력)
    const board = boardList.find((board)=>(board.boardId == id))
    
    

    return (  
        <>
            <p>{board ? <BoardPrint board={board} /> : "없는 페이지입니다"}</p>
        </>
    );
}

const BoardPrint = ({board}) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    // 삭제 함수
    const onDeleteBoard = (id) => {
        dispatch(deleteBoard(id))
        navigate('/board')
    }
    // 수정 함수
    const toModifyBoard = (board) =>{
        navigate('/board/modifyform',{state:board})
    } 
    return (
        <Container>
            <Row>
                <Col xs={1}>{board.boardId}</Col>
                <Col><h2>{board.title}</h2></Col>
                <Col>
                    <Button onClick={()=>{toModifyBoard(board)}}>수정</Button>
                    <Button onClick={()=>{onDeleteBoard(board.boardId)}}>삭제</Button>
                </Col>
            </Row>
            <Row>
                <Col>{board.userEmail}</Col>
            </Row>
            <Row className="my-3">
                <Col><h4>{board.content}</h4></Col>
            </Row>
            <Row>
                <Col><span>조회수 {board.view}</span></Col>
                <Col><span>좋아요 {board.like}</span></Col>
            </Row>
        </Container>
    )
}

export default BoardPage;