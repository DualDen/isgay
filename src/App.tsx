import React, {useRef, useState} from 'react';
import './App.css';
import {Button, Modal} from "antd";
import {ManOutlined, WomanOutlined} from '@ant-design/icons';
import ReactAudioPlayer from "react-audio-player";
import music from "./gdfgdgf.mp3"

function App() {
  const [isGayModal,setIsGayModal] = useState(false);
  const removeHandler = (e:any) => {
    const x = Math.random() * (400 - 1) + 1;
    const y = Math.random() * (400 - 1) + 1;
    e.currentTarget.style.transform = `translate(${x}px,${y}px)`;
  }
  const [value,setValue] = useState("");
  const title = value === "yes" ? "WELCOME TO THE CLUB BUDDY" : "СОСИ ХУЙ ШЛЮХА";
  const img = value === "yes" ? "https://kartinkof.club/uploads/posts/2022-03/1648241978_18-kartinkof-club-p-billi-kherrington-mem-19.jpg" : "https://discordik.ru/wp-content/uploads/2021/01/skrimer-po-ssylke-v-diskord1.jpg"
  let audio = new Audio(music);
  const yesHandle = () => {
    setIsGayModal(true);
    setValue("yes");
  }
  const noHandle = () => {
    setIsGayModal(true);
    setValue("no");
    audio.play();
  }
  return (
    <div className="App">
      <div className="header">
        ЭТО ГЕЙ ТЕСТ
      </div>
      <div className="content">
        <div className="gay-title">
          А ты гей?
        </div>
        <div className="buttons">
          <div onMouseEnter={removeHandler} className="no-button">
            <Button onClick={noHandle} className="nobtn" type="primary" icon={<WomanOutlined />} size="large">
              Нет
            </Button>
          </div>
          <Button className="yesbtn" onClick={yesHandle} type="primary" icon={<ManOutlined />} size="large">
            Да
          </Button>
        </div>
      </div>
      <Modal title={title} footer={null} open={isGayModal} onCancel={() => setIsGayModal(false)}>
        <img style={{borderRadius: "16px"}} width="100%" src={img} />
      </Modal>
    </div>
  );
}

export default App;
