// 작성한 리덕스 모듈들을 하나로 묶어서 사용
// 및 내보내기
import { combineReducers } from "redux";
import currentUser from "../modules/currentUser";
import guest from "../modules/guest";

const rootReducer = combineReducers({currentUser,guest});

export default rootReducer;