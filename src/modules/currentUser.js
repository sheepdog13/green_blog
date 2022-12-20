// 초기값
// 로그인 여부를 알아보기위해 초기값을 null
// 안에 [], {}를 넣어두면 값이 있다고 판단
/**
 * 
 */
const initalState = null
// 다른 방법으로 데이터 관린
// {userinfo : null, login: false} 와 같이 객체안에
// 속성으로 추가해서 사용


// 리듀서 - switch 문으로 작성
function currentUser(state=initalState, action) {
    switch(action.type) {
        case "userLogin":
            // 비동기의 내용은 컴포넌트에서 실행한후, 리덕스로 들고옴
            // *비동기를 미들웨어(tunck를 이용하여 진행할 수 있다)
            // 구글인증을 통해서 가져온 값은 객체를 통해서 가져온다
            // 그 값을 통채로 넣어준다면, 받아온 값을 그대로 넣어주면 된다
            // > 그 값을 그대로 넣어주기 보다는
            // 그 안에 있는 값중에 필요한것만 골라서 넣는게 좋다
            return action.payload;
        case "userLogout":
            // 로그아웃을 했을때 그 값이 null값으로 들어감
            return null;
        default :
            return state; 
    }
}

export const userLogin = (user)=> ({type:"userLogin", payload :user})
export const userLogout = ()=> ({type:"userLogin"})
export default currentUser;