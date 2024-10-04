// components/FormBuilder.tsx
import React, { useState } from "react";

interface Field {
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
}

const FormBuilder = () => {
  const [formName, setFormName] = useState<string>("");
  const [fields, setFields] = useState<Field[]>([]);
  const [newField, setNewField] = useState<Field>({
    label: "",
    type: "text",
    required: false,
  });

  const addField = () => {
    setFields([...fields, newField]);
    setNewField({ label: "", type: "text", required: false });
  };

  const handleSubmit = async () => {
    const response = await fetch("/api/forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formName,
        fields,
      }),
    });

    if (response.ok) {
      alert("Form saved successfully!");
    } else {
      alert("Error saving form");
    }
  };

  return (
    <div>
      <h2>Create a new form</h2>
      <input
        type="text"
        value={formName}
        onChange={(e) => setFormName(e.target.value)}
        placeholder="Form Name"
      />
      <div>
        <h3>Fields</h3>
        {fields.map((field, index) => (
          <div key={index}>
            <strong>{field.label}</strong> ({field.type})
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newField.label}
        onChange={(e) => setNewField({ ...newField, label: e.target.value })}
        placeholder="Field Label"
      />
      <select
        value={newField.type}
        onChange={(e) => setNewField({ ...newField, type: e.target.value })}
      >
        <option value="text">Text</option>
        <option value="email">Email</option>
        <option value="number">Number</option>
      </select>
      <button onClick={addField}>Add Field</button>

      <button onClick={handleSubmit}>Save Form</button>
    </div>
  );
};

export default FormBuilder;
