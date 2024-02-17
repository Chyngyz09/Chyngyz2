import './creation.css';

import React, { useState } from "react"; // импорт useState
import axios from "axios";

import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Creation = () => {
  const [title, setTitle] = useState(""); // setTitle - это функция которая позволяет изменить состояние // состояние
  const [important, setImportant] = useState()  
  const [description, setDescription] = useState("")
  const [img, setImg] = useState("")
  const [open, setOpen] = useState(false); // отображает нам уведомление
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event) => {
    setImportant(event.target.value);
  }; 

  const toHome = () =>
    setTimeout(() => {
      navigate("/services");
    }, 1000);

  const addPost = (e) => {
    e.preventDefault(); // это нужно для отмены обновления страницы

    const newData = {
      // это наши новые данные, которые нужно отправить
      title,
      img,
      important
    };
     
    axios
      .post(" http://localhost:3001/services", newData) // promise  ; // обработка promise\
      .then((res) => {
        setTitle("");
        setImg("");
        setImportant("")
        setDescription("")
        setOpen(true);
        toHome();
      });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={addPost}>
        {/* onSubmit - он срабатывает лишь при отправке */}
        <h1>СОЗДАНИЕ УСЛУГ</h1>
        <TextField
          id="standard-basic"
          label="Название"
          variant="standard"
          value={title}
          onChange={(event) => setTitle(event.target.value)} // onChange() - вызывает событие, это событие мы можем получить
        />
        {/* e.target.value - данные которые я ввожу в инпут */}
        <TextField
          id="standard-basic"
          label="Описание"
          variant="standard"
          value={description}
          onChange={(event) => setDescription(event.target.value)} // onChange() - вызывает событие, это событие мы можем получить
        />

        <TextField
          id="standard-basic"
          label="фото"
          variant="standard"
          value={img}
          onChange={(event) => setImg(event.target.value)} // onChange() - вызывает событие, это событие мы можем получить
        />


        <Button variant="contained" color="success" type="submit">
          SEND
        </Button>

      </form>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is post sended!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Creation;
