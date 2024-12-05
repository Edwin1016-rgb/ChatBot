import React, { useState } from "react";
import { getChatbotResponse } from "../service/chatbotservice";

function Chatbot() {
    const [messages, setMessages] = useState([]); // Para almacenar mensajes del usuario y respuestas del bot
    const [userInput, setUserInput] = useState(""); // Para controlar la entrada del usuario

    // Función que se llama cuando el usuario envía un mensaje
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userInput.trim() === "") return; // Evitar enviar mensajes vacíos

        // Agregar el mensaje del usuario al estado
        const newMessages = [...messages, { sender: "user", text: userInput }];
        setMessages(newMessages);

        // Obtener la respuesta del bot
        const botResponse = await getChatbotResponse(userInput);

        // Agregar la respuesta del bot al estado
        setMessages([...newMessages, { sender: "bot", text: botResponse }]);

        // Limpiar la entrada del usuario
        setUserInput("");
    };

    return (
        <div className="chat-container">
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        <p>{msg.text}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="chat-form">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Escribe un mensaje..."
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Chatbot;
