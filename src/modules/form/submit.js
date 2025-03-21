import dayjs from "dayjs";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define a data mínima como sendo a data atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
	// Previne o comportamento padrão de carregar a página
	event.preventDefault();

	try {
		const name = clientName.value.trim();
		if (!name) return alert("Por favor, informe o nome do cliente.");

		// Recupera o horário selecionado
		const hourSelected = document.querySelector(".hour-selected");
		if (!hourSelected) return alert("Por favor, informe o horário do agendamento.");

		// Recupera somente a hora
		const [hour] = hourSelected.innerText.split(":");

		// Insere a hora na data
		const when = dayjs(selectedDate.value).add(hour, "hour");

		// Gera um ID
		const id = new Date().getTime();

		console.log({ id, name, when });
	} catch (error) {
		alert("Não foi possível realizar o agendamento.")
		console.log(error);
	}
};
