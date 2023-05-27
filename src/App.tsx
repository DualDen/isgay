import React, {useState} from 'react';
import './App.css';
import {Button, Modal} from "antd";
import {ManOutlined, WomanOutlined} from '@ant-design/icons';

function App() {
  const [isGayModal,setIsGayModal] = useState(false);
  const removeHandler = (e:any) => {
    const x = Math.random() * (400 - 1) + 1;
    const y = Math.random() * (400 - 1) + 1;
    e.currentTarget.style.transform = `translate(${x}px,${y}px)`;
    console.log(10)
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
            <Button className="nobtn" type="primary" icon={<WomanOutlined />} size="large">
              Нет
            </Button>
          </div>
          <Button className="yesbtn" onClick={() => setIsGayModal(true)} type="primary" icon={<ManOutlined />} size="large">
            Да
          </Button>
        </div>
      </div>
      <Modal title="WELCOME TO THE CLUB BUDDY" footer={null} open={isGayModal} onCancel={() => setIsGayModal(false)}>
        <img style={{borderRadius: "16px"}} width="100%" src="https://kartinkof.club/uploads/posts/2022-03/1648241978_18-kartinkof-club-p-billi-kherrington-mem-19.jpg" />
      </Modal>
    </div>
  );
}

export default App;
