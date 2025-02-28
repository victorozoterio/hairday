"use strict"; // aplica o modo estrito e nos ajuda a manter boas práticas de escrita no javascript

// Configuração do dayjs
import "./libs/dayjs.js";

// CSS
import "./styles/global.css";
import "./styles/form.css";
import "./styles/schedule.css";

import dayjs from "dayjs";
console.log(dayjs().format("DD/MM - HH:mm"));
