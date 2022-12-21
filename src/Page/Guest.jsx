import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import guest, { addGuest } from "../modules/guest";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const Guest = () => {
    // 리덕스를 이용하여 guest의 값 가져오기
    const guestList = useSelector((state)=>(state.guest))
    const dispatch = useDispatch();
    // 이메일정보를 들고오기위해 리덕스의 currentUser들고오기
    const currentUser = useSelector((state)=>(state.currentUser))

    const [name, setName] = useState(currentUser ? currentUser.email : "익명");
    const [text, setText] = useState();
    return (  
        <div className="mx-5 mt-5">
            <h3>글을 쓸 공간</h3>
            <FloatingLabel
                controlId="floatingInput"
                label="이름"
                className="mb-3"
            >
                <Form.Control 
                type="text" 
                value={currentUser ? currentUser.email:"익명"}
                style={{border:"none", borderBottom: "1px solid grey"}}
                onChange={(e)=>{setName(e.target.value)}} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="작성할 내용">
                <Form.Control
                as="textarea"
                style={{ height: '100px' }}
                onChange={(e)=>{setText(e.target.value)}}
                />
            </FloatingLabel>
            {/* 버튼을 클릭했을때 리듀서에 내용을 추가 */}
            <Button className="mt-2" onClick={()=>{dispatch(addGuest({name:name, text:text}))}}>작성</Button>
            <hr />
            <h3>글 쓴 내용을 출력하는 공간</h3>
            {
                guestList.map((guest)=>(
                    <GuestText guest={guest} />
                ))
            }
        </div>
    );
}
 
export default Guest;

const GuestText = ({guest}) => {
    return (
        <Card style={{ width: "100%" }}>
        <Card.Body>
            <Card.Title>{guest.name}</Card.Title>
            <Card.Text>
            {guest.text}
            </Card.Text>
        </Card.Body>
        </Card>
    )
}