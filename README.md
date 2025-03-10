# Praiconsrl - Sitio Web Corporativo

Bienvenido al repositorio del sitio web oficial de **Praiconsrl**. Este proyecto está desarrollado con **HTML, CSS, JavaScript** en el frontend y **Node.js con Express y Nodemailer** en el backend. El sitio cuenta con animaciones suaves implementadas con **GSAP** y está desplegado en **Render**.

---

## 📌 Características Principales

- 🎨 **Diseño responsivo y adaptable** a distintos dispositivos
- 🚀 **Animaciones suaves** al hacer scroll con **GSAP**
- 📩 **API de contacto** con envío de correos automáticos
- 🔒 **Seguridad** en los formularios con validaciones
- ☁️ **Desplegado en Render** con opción de dominio propio

---

---

## 🚀 Instalación y Uso (Modo Desarrollo)

### **1️⃣ Clonar el Repositorio**
```sh
git clone https://github.com/tuusuario/tu-repositorio.git
cd tu-repositorio
```

### **2️⃣ Configurar el Backend**
```sh
cd backend
npm install
cp .env.example .env  # Crear archivo de configuración
```

🔹 **Editar `.env` con las credenciales necesarias:**
```env
EMAIL_USER=tuemail@example.com
EMAIL_PASS=tucontraseña
DESTINATION_EMAIL=destinatario@example.com
```

### **3️⃣ Iniciar el Servidor**
```sh
node server.js
```

### **4️⃣ Ejecutar el Frontend**
Abrir `index.html` en el navegador o usar Live Server.

---

## 📩 API del Formulario de Contacto

### **📍 Endpoint:**
`POST /api/contacto`

### **📍 Parámetros:**
| Campo   | Tipo   | Descripción  |
|---------|--------|-------------|
| nombre  | string | Nombre del usuario |
| email   | string | Correo del usuario |
| mensaje | string | Mensaje enviado |

### **📍 Ejemplo de Uso:**
```sh
curl -X POST https://tuweb.com/api/contacto -d '{"nombre": "Juan", "email": "juan@mail.com", "mensaje": "Hola!"}' -H "Content-Type: application/json"
```

---

## 📜 Licencia y Créditos

Este proyecto es de uso privado y no está destinado a código abierto. Desarrollado por **[Santiago G. Castellaro](https://github.com/castellarosantiago)**.

