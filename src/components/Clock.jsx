import React, { Component, useEffect, useState } from 'react'


const Clock = () => {
    const clock = {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }
    // Estado privado del component
    const [dataClock, setDataClock] = useState(clock)

    useEffect(() => {
        const timerID = setInterval(() => {
            tick()
        }, 1000);
        return () => {
            clearInterval(timerID);
        }
    }, [])

    return (
        <div>
            <h2>
                Hora Actual:
                {dataClock.fecha.toLocaleTimeString()}
            </h2>
            <h3>{dataClock.nombre} {dataClock.apellidos}</h3>
            <h1>Edad: {dataClock.edad}</h1>
        </div>
    )

    function tick() {
        setDataClock((prevState) => {
            let edad = prevState.edad + 1;
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        });
    }
}
export default Clock;