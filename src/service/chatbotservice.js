const API_URL = "http://127.0.0.1:5000/chat";  // URL del backend de Flask

// Función para enviar mensaje al chatbot y recibir la respuesta
export async function getChatbotResponse(message) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
        });
        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error("Error al comunicarse con el backend:", error);
        return "Lo siento, hubo un error. Intenta nuevamente.";
    }
}
