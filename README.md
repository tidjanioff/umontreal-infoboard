# UMontreal InfoBoard

This project is a dynamic **web-based information screen** designed to be displayed at the entrance of **Université de Montréal**. It cycles through a series of informative and engaging panels aimed at students, visitors, and staff.

<p align="center">
  <img src="diro/udemlogo2.png">
</p>

## 🎯 Purpose

To provide a modern, real-time, and visually appealing display featuring:

- Useful daily information  
- Updates from the DIRO department  
- Countdown to key events  

## 🚀 Setup Instructions

To run the project locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/tidjanioff/umontreal-infoboard.git 
    ```

2. Open `tv.html` in your browser.  

## 🧩 Screen Overview

The display consists of **6 full-screen panels** that can rotate automatically:

### 1. Personal Introduction

- A photo of the project creator  
- Name and basic personal info  
- A brief, friendly intro to humanize the project  

### 2. Time, Date, Weather & Screen Location

- Real-time date and clock  
- Current weather in Montreal (fetched via a weather API)  
- A static image showing where the screen is located on campus

### 3. DIRO News Feed

- Pulls updates from the **DIRO (Department of Computer Science and Operations Research)** using their public API  
- Displays recent news and upcoming events  

### 4. Countdown to the Paris 2024 Olympics

- Live countdown to the opening ceremony of the **2024 Summer Olympics** in Paris (July 26, 2024)  

### 5. Countdown to Class of 2024 Graduation

- Live countdown to the graduation day for the **2024 cohort**   

### 6. Signature Screen

- A visually stylish closing screen  
- Displays the creator’s informations 

## 🛠️ Technologies Used

- **HTML5**  
- **CSS3** 
- **JavaScript** 
- **APIs**:  
  - Weather API : OpenWeatherMap
  - DIRO API  

## 📁 Project Structure

- `UMONTREAL-INFOBOARD/`
  - `copyright/`
    - `fond.png` – Background image
  - `diro/`
    - `DIRO5.png` – Background image with DIRO logo
    - `panneau-diro.css` – Styles for DIRO panel
    - `panneau-diro.js` – Logic for DIRO panel
    - `udemlogo.png` – UdeM logo image
    - `udemlogo2.png` – Alternative UdeM logo image
  - `graduation/`
    - `graduation.png` – Graduation image at UdeM
    - `panneau-graduation.css` – Styles for graduation panel
    - `panneau-graduation.js` – Logic for graduation panel
  - `joparis/`
    - `parisjo.png` – Paris image with JO logo
    - `panneau-jo.css` – Styles for JO panel
    - `panneau-jo.js` – Logic for JO panel
  - `presentation/`
    - `tidjani5.png` – Tidjani's photo
  - `udem/`
    - `bruines.png`, `brume.png`, `neige.png`, `nuages.png`, `pluie.png`, `soleil.png` – Weather condition icons
    - `udemGate4.png` – Gate image of UdeM
    - `panneau-udem.css` – Styles for UdeM panel
    - `panneau-udem.js` – Logic for UdeM panel
  - `panneaux.css` – General styles for all panels
  - `panneaux.js` – General logic for all panels
  - `README.md` – Project documentation
  - `tv.html` – Main HTML file to render the infoboard


---

© 2024 **UMontreal InfoBoard** | Built by Tidjani. All rights reserved.
