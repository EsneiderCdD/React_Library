# 🧩 PropTypes en React

**PropTypes** es una herramienta de **validación de tipos** para React.  
Su función es:

> “Asegurarse de que los componentes reciban las *props* del tipo correcto”.

---

## ⚙️ Instalación

Instálalo con npm o yarn:

npm install prop-types


## ⚙️ Tipos básicos disponibles




| Tipo                | Ejemplo                        | Qué valida       |
| ------------------- | ------------------------------ | ---------------- |
| `PropTypes.string`  | `"Hola"`                       | Cadenas de texto |
| `PropTypes.number`  | `42`                           | Números          |
| `PropTypes.bool`    | `true / false`                 | Booleanos        |
| `PropTypes.array`   | `[1, 2, 3]`                    | Arrays           |
| `PropTypes.object`  | `{ name: "Ana" }`              | Objetos          |
| `PropTypes.func`    | `() => ...`                    | Funciones        |
| `PropTypes.node`    | Texto o elementos React        |                  |
| `PropTypes.element` | Un componente React específico |                  |
