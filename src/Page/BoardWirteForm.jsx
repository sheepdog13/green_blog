import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { modifyBoard } from "../modules/board";

const BoardWirteForm = () => {
    // navigate를 통해서 값을 받아옴
    const location = useLocation();
    const [board,setBoard] = useState(location.state);

    // 값을 수정했을대 board의 내용을 수정하는 함수
    const onChange = (e) => {
        setBoard({...board, [e.target.name]: e.target.value})
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // 수정완료 버튼을 눌렀을 때 실행하는 함수
    const onModifyBoard = (board) => {
        dispatch(modifyBoard(board));
        navigate('/board/'+board.boardId);
    }
    return (  
        <Container>
            <Row>
                <Col xs={1}>{board.boardId}</Col>
                <Col>
                    <input 
                        name="title" 
                        value={board.title} 
                        onChange={(e)=>{onChange(e)}}
                    />
                </Col>
                <Col>
                    <Button onClick={()=>{onModifyBoard(board)}}>수정</Button>
                </Col>
            </Row>
            <Row>
                <Col>{board.userEmail}</Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <textarea 
                    name="content" 
                    onChange={(e)=>{onChange(e)}}
                    >
                        {board.content}
                    </textarea>
                </Col>
            </Row>
        </Container>
    );
}
 
export default BoardWirteForm;