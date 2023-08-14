/* eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post =  '강남 우동 맛집';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let[따봉,따봉변경] = useState(0);
  let[modal,setModal] = useState(false);
  let[title,setTitle] = useState(0);
  let[입력값,입력값변경] = useState('');

  
  // function 함수(){
  //   console.log(1);
  // }

  // let[logo, setLogo] = useState('ReactBlog');

  //a : state에 보관했던 자료 나옴
  //b : state변경 도와주는 함수


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button>가나다순정렬</button>

      <button onClick={()=>{
        let copy = [...글제목];//...문법 화살표달라져 독립적인 사본이됨
        copy[0]='여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>
{/* 
      <div className="list">
        <h4>{글제목[0]}<span onClick={()=>{따봉변경(따봉+1)}}>❤</span>{따봉}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(true)}}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>  */}
      
      
      {
        글제목.map(function(a,i){
          //i : 반복문 돌 때 마다 0부터 1씩 증가하는 정수
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{setModal(true); setTitle(i)}}>{글제목[i]}<span onClick={(e)=>{e.stopPropagation(); 따봉변경(따봉+1)}}>❤</span>{따봉}</h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy=[...글제목];
                copy.splice(i,1);
                글제목변경(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      {/* <button onClick={()=>{setTitle(0)}}>글제목0</button>
      <button onClick={()=>{setTitle(1)}}>글제목1</button>
      <button onClick={()=>{setTitle(2)}}>글제목2</button> */}

      <input onChange={(e)=>{
        입력값변경(e.target.value);
      }}></input>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      }}>급발행</button>
      {
        modal == true ? <Modal title={title} 글제목={글제목}/> : null
      }
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}


export default App;
