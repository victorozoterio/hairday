export function hoursClick() {
    const hours = document.querySelectorAll(".hour-avaliable");

    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {

            // Remove a classe hour-selected de todas as li
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected");
            })

            // Adiciona a classe hour-selected na li clicada
            selected.target.classList.add("hour-selected");
        })
    })
}