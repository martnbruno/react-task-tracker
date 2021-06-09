import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Por favor, añade una tarea");
      return;
    }

    onAdd({ text, day, time, reminder });

    setText("");
    setDay("");
    setTime("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Tarea</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Añadir Tarea"
        />
      </div>
      <div className="form-control">
        <label>Dia</label>
        <input
          type="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Add Day"
        />
      </div>
      <div className="form-control">
        <label>Hora</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Add Time"
        />
      </div>
      <div className="form-control-check red">
        <label>Fijar Recordatorio</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Guardar Tarea" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
