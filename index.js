const cities = ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Токио'];

const citiesTemperatures = [];

const list = document.querySelector('.list');

for (city of cities){
    const temperature = prompt(`Введите температуру в городе ${city}`);
    citiesTemperatures.push(+temperature);
    const temperaturesInfo = document.createElement('p');
    temperaturesInfo.textContent = `Температура в ${city}: ${temperature} ℃`;
    list.append(temperaturesInfo);
} 

const findMaxAndMinTemperatures = () => {
    const maxTemperature = Math.max(...citiesTemperatures);
    const minTemperature = Math.min(...citiesTemperatures);

    const maxTemperatureInfo = document.createElement('p');
    maxTemperatureInfo.textContent = `Максимальная температура: ${maxTemperature} ℃`;
    maxTemperatureInfo.style.fontWeight = "bold";
    list.append(maxTemperatureInfo);

    const minTemperatureInfo = document.createElement('p');
    minTemperatureInfo.textContent = `Минимальная температура: ${minTemperature} ℃`;
    minTemperatureInfo.style.fontWeight = "bold";
    list.append(minTemperatureInfo);

};
findMaxAndMinTemperatures();
