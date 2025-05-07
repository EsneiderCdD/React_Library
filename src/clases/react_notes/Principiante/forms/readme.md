# 🛠️ Biblioteca de Estudio: Formularios y Componentes Controlados en React

Este repositorio contiene una colección de ejemplos prácticos organizados para aprender y dominar los **Componentes Controlados** en React, especialmente enfocados en el manejo de formularios. Cada archivo `.jsx` representa una habilidad o concepto puntual, abordando el tema de forma modular y progresiva.

---

## 🧩 BIBLIOTECA PRINCIPAL (Básico e Intermedio)

| Archivo | Tema | Descripción breve |
|:---|:---|:---|
| `InputControlado.jsx` | Input controlado básico | Usa `useState` para enlazar el valor del input con el estado del componente. |
| `TextareaControlado.jsx` | Textarea controlado | Similar al input pero con campo de texto largo (`<textarea>`). |
| `SelectControlado.jsx` | Menú desplegable (select) | Control de opción seleccionada en un `<select>` mediante `useState`. |
| `CheckboxControlado.jsx` | Casilla de verificación | Uso de la propiedad `checked` y `onChange` para checkboxes. |
| `RadioControlado.jsx` | Botones de opción (radio) | Selección de una opción entre varias usando `checked` y `value`. |
| `FormularioBasico.jsx` | Formulario completo con múltiples campos | Manejando varios inputs con un solo estado de objeto y `onChange`. |
| `SubmitFormulario.jsx` | Envío del formulario | Uso de `onSubmit`, `preventDefault()` y lectura de datos desde el estado. |

---

## 🚀 FUNCIONALIDADES INTERMEDIAS

| Archivo | Tema | Descripción breve |
|:---|:---|:---|
| `ValidacionBasica.jsx` | Validación simple | Verifica que los campos no estén vacíos antes de enviar el formulario. |
| `ValidacionTiempoReal.jsx` | Validación en tiempo real | Detecta errores conforme el usuario escribe, útil para UX. |
| `TransformacionDeDatos.jsx` | Formatear entrada | Convierte texto ingresado en tiempo real (por ejemplo, a mayúsculas). |
| `MultiInputManejador.jsx` | Manejo dinámico de inputs | Usa un solo handler y `name` para múltiples campos. |

---

## 🧠 NIVEL AVANZADO (Referencia futura, NO implementar aún)

- Validación con Yup o Formik.
- Formularios dinámicos con múltiples pasos.
- Persistencia de formularios (con LocalStorage o Redux).
- Acceso a formularios desde componentes padres.
- Hook personalizado `useForm`.

---

💡 *Consejo:* Trata cada archivo como una mini lección. Puedes jugar con el código, modificarlo, y ver cómo los cambios afectan el comportamiento. ¡Así se aprende React de verdad!

