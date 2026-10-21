# Rogeeta Clinic 🩺

A modern, responsive landing page for **Rogeeta Clinic**, designed to introduce the clinic, showcase its healthcare services, and make booking appointments simple and convenient.

## ✨ Features

- **Modern UI/UX:** Clean, professional healthcare design.
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- **Clinic Introduction:** Present the clinic, its mission, and its healthcare services.
- **Appointment Booking:** Patients can submit their appointment details and continue directly to WhatsApp to contact the clinic.
- **WhatsApp Integration:** Appointment requests are prepared in a WhatsApp message, allowing patients to contact the clinic without creating an account.
- **Smooth Animations:** Engaging transitions and animations for a polished browsing experience.

## 🛠️ Tech Stack

- React
- Vite
- GSAP
- JavaScript
- CSS
- WhatsApp Click-to-Chat integration

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd rogeeta
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## 📅 Appointment Booking

Patients can fill out the appointment form with their contact details and preferred appointment information. The website then redirects them to WhatsApp with a pre-filled message for the clinic.

**Note:** Appointments are not automatically confirmed. The clinic must respond through WhatsApp to confirm availability.

Configure the clinic's WhatsApp number in the booking integration using the international format without `+`, spaces, or dashes.

## 📦 Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📄 Project Scope

Rogeeta Clinic is a **demo landing page**, not a full clinic management system. It does not include a backend, database, patient accounts, or automatic appointment scheduling.

---

Built with ❤️ using React and Vite.
