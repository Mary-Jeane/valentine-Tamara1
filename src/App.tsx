import { useState } from "react";
import heartsCat from "./assets/hearts-cat.gif"; // (puedes usarlo si quieres luego)

const frases = [
  "No",
  "¿Segura?",
  "¿Segurísima?",
  "¿Segura segura segura?",
  "¿Estás de verdad segurisísima?",
];

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    gap: "16px",
  },
  buttons: {
    display: "flex",
    gap: "16px",
  },
  yesButton: {
    padding: "12px 24px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    background: "#ff4d6d",
    color: "white",
    fontWeight: "bold",
  },
  noButton: {
    padding: "12px 24px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    background: "#adb5bd",
    color: "black",
    fontWeight: "bold",
  },
};

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount((prev) => prev + 1);
  }

  function getNoButtonText() {
    return frases[Math.min(noCount, frases.length - 1)];
  }

  return (
    <div style={styles.container}>
      {yesPressed ? (
        <>
          <img
            alt="Cat love"
            width="220"
            src="https://media.tenor.com/wUJJ0UKFpzAAAAAj/peach-and-goma-peach.gif"
          />

          <div style={{ fontSize: "22px", fontWeight: "bold" }}>
            Muchas gracias por aceptar, linda
          </div>
        </>
      ) : (
        <>
          <img
            alt="cat hearts"
            width="220"
            src="https://media.tenor.com/a6gW6JGJAtgAAAAj/hearts-cat.gif"
          />

          <div style={{ fontSize: "22px", fontWeight: "bold" }}>
            ¿Sería usted mi San Valentín?
          </div>

          <div style={styles.buttons}>
            <button
              style={{ ...styles.yesButton, fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Sí
            </button>

            <button onClick={handleNoClick} style={styles.noButton}>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
