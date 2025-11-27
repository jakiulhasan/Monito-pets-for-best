# Monito Pets For Best

A Next.js-based pet marketplace application for browsing, adding, and
managing pets.\
This project includes authentication, responsive UI, filtering, and full
CRUD operations for pets.

## 🚀 Features

- Browse all pets with filtering
- View detailed pet information
- Add and manage pets
- User authentication (login + register)
- Fully responsive UI
- Axios-based API requests
- TailwindCSS & DaisyUI styling

---

## 📦 Setup & Installation

### **1. Clone the repository**

```bash
git clone https://github.com/your-repo/monito-pets-for-best.git
cd monito-pets-for-best
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Create `.env.local` file**

Add necessary environment variables such as:

    NEXTAUTH_SECRET=your_secret_key
    NEXTAUTH_URL=http://localhost:3000

### **4. Run development server**

```bash
npm run dev
```

### **5. Build for production**

```bash
npm run build
npm start
```

---

## 🧭 Route Summary

Route Description

---

`/` Home page
`/login` Login page
`/register` Registration page
`/about` About page
`/contact` Contact page
`/add-pet` Add new pet
`/manage-pets` Manage all pets (view/delete)
`/pets` All pets listing with filters
`/pets/[id]` Individual pet details page

---

## 🛠 Technologies Used

- **Next.js 16**
- **React 19**
- **Next Auth**
- **TailwindCSS v4**
- **DaisyUI**
- **Axios**
- **SweetAlert2**

---

## 📂 Project Structure (Basic Overview)

    /app
      /about
      /contact
      /login
      /register
      /add-pet
      /manage-pets
      /pets
        /[id]
    /components
    /axios
    /public

---

## 🙌 Credits

Developed by **Jakiul Hasan**.
