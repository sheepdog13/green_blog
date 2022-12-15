import { useEffect,useMemo } from "react";
import { useState } from "react";
import Slider from "react-slick";
import '../css/Home.css'


const Home = () => {
    // 시계 출력
    const [time, setTime] = useState(new Date());

    // 시계내용을 출력하는 함수 : return 값으로 시간을 돌려줌 - 문자열
    const printClock = () => {
        // 숫자를 문자로 바꿔서, 문자 객체에 있는 0을 채우는 메소드 사용
        const hour = String(time.getHours()).padStart(2,"0");
        const minute = String(time.getMinutes()).padStart(2,"0");
        const second = String(time.getSeconds()).padStart(2,"0");
        return `${hour} : ${minute} : ${second}`;
    }

    // 현재 페이지가 실행되었을때, (마운트 되었을 때)
    // setInterval을 이용하여 시간값을 1초마다 바꿔서 출력
    // setInterval은 한번만 작성해주면 된다
    useEffect(()=>{
        setInterval(() => {setTime(new Date())}, 1000);
    },[]);

    // 글귀 또는 명언 출력 : 배열안에 여러개의 문구를 넣어서 출력
    // 그중에 랜덤으로 하나의 값을 정해서 화면에 출력
    const [words, setWords] = useState([
        {text : "명언 또는 글귀", author: "-사람 또는 책 이름-"},
        {text : "어떤 바보라도 컴퓨터가 이해할 수 있는 코드를 작성할 수 있습니다. 훌륭한 프로그래머는 인간이 이해할 수 있는 코드를 작성합니다.", author: "-Martin Fowler-"},
        {text : "모든 경험은 결국 삶의 양식이 되기 때문에 인생에 헛된 것은 아무것도 없다.", author: "-미야모토 시게루-"},
        {text : "올바로 작동하지 않는다고 걱정하지마라. 잘 작동하면, 내 일이 없어진다.", author: "-Mosher-"},
    ]);

    // 글귀를 랜덤하게 출력하는 함수 작성
    // > 문제 : printWord를 실행할때마다 random 값이 바뀐다
    // >> 왜 바뀌는가? : update를 할때마다 printWord 실행
    // >> printWord가 return의 html 안에 있기 때문에 계속 해서 실행
    
    // 이 함수를 고정할수 있는방법 : useCallback, useMemo
    // return값을 고정 : useMemo return 값 고정
    // useMemo를 사용했을때, 변수 안에 들어가는 것 = return값
    const printWord = useMemo(() => {
        const randomnum = Math.floor(Math.random()*words.length)
        return words[randomnum];
    },[])
    
    // 슬릭 화면 사용
    // 슬릭과 같은 라이브러리를 사용할때, 관련내용을 확인
    const settings = {
        arrows : false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // 슬릭에 출력할 배경이미지 배열
    const [imgeList, setImgeList] = useState([
        "cat1.jpg","cat2.jpg","cat3.jpg",
    ])
    return (  
        <>
        {/* 슬릭화면 출력 */}
        <div>
        <Slider {...settings}>
            {/* slider는 내용이 커지면 다음 페이지에 넘어간다 */}
            {/* 이미지를 주소로 바로 접근할수 없기 때문에 import나 require로 접근 */}
            {/* map을 사용해서 출력 - 배열 */}
            {imgeList.map((image)=>(
                <div>
                    <div 
                        style={{
                            width:"100%", height:"100vh",
                            backgroundImage : 'url('+require("../img/"+image)+')',
                            backgroundSize : "cover",
                            backgroundPosition : "center center"
                        }}
                    >
                    </div>
                </div>
            ))}
        </Slider>
        </div>
        <div className="Home_main">
            {/* 현재 시간 출력 */}
            <h1>{ printClock() }</h1>
            {/* 배열안에 있는 명언 중 하나 출력 */}
            {/* useMemo를 사용했을경우, 
                그 함수의 return값이 들어가게 된다.
                사용할 때 변수이름으로만 사용 
            */}
            <p>{printWord.text}</p>
            <p>{printWord.author}</p>
        </div>
        </>
    );
}
 
export default Home;