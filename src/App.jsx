import React, { useState } from "react";

function App() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hola 👋 Soy tu asistente virtual universitario. Puedes preguntarme sobre programacion, música, películas, deportes, clima o tarea. Usa solo la palabra que quieras conocer de las que enliste, por ejemplo musica."
    }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input.toLowerCase();
    let response = "No entendí tu pregunta 😅, intenta preguntarme sobre tecnología, películas, música, deportes o tareas académicas.";

    // Tecnología
    if (userMessage.includes("programacion") || userMessage.includes("python")) {
      response = "Python es uno de los lenguajes más usados actualmente para IA, desarrollo web y análisis de datos.";
    }

    // Películas
    else if (userMessage.includes("peliculas") || userMessage.includes("marvel")) {
      response = "Algunas películas populares son Avengers: Endgame, Interstellar y Spider-Man: No Way Home.";
    }

    // Música
    else if (userMessage.includes("musica") || userMessage.includes("canciones")) {
      response = "Puedes escuchar géneros como rock, pop, reggaetón o música clásica dependiendo de tu estado de ánimo.";
    }

    // Deportes
    else if (userMessage.includes("futbol") || userMessage.includes("deportes")) {
      response = "El fútbol es uno de los deportes más populares del mundo. Equipos como Real Madrid y Barcelona son muy conocidos.";
    }

    // Clima
    else if (userMessage.includes("clima") || userMessage.includes("tiempo")) {
      response = "No tengo conexión en tiempo real, pero puedes consultar Google Weather para datos actualizados.";
    }

    // Videojuegos
    else if (userMessage.includes("videojuegos") || userMessage.includes("minecraft")) {
      response = "Minecraft, Fortnite y GTA V son videojuegos muy populares entre estudiantes universitarios.";
    }

    // Tareas académicas
    else if (userMessage.includes("tarea") || userMessage.includes("universidad")) {
      response = "Organiza tus tareas usando herramientas como Trello, Notion o Google Calendar.";
    }

    const newMessages = [
      ...messages,
      { sender: "user", text: input },
      { sender: "bot", text: response }
    ];

    setMessages(newMessages);
    setInput("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f4ff"
      }}
    >
      <div
        style={{
          width: "450px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        <h2>ChatBot tilines</h2>

        <div
          style={{
            height: "350px",
            overflowY: "auto",
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          {messages.map((msg, index) => (
            <p key={index}>
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
          ))}
        </div>

        <input
          type="text"
          value={input}
          placeholder="Escribe tu pregunta..."
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "70%", padding: "8px" }}
        />

        <button
          onClick={sendMessage}
          style={{
            marginLeft: "10px",
            padding: "8px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default App;
