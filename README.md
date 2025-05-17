# UMontreal InfoBoard

This project is a dynamic **web-based information screen** designed to be displayed at the entrance of the **Université de Montréal**. It cycles through a series of informative and engaging panels aimed at students, visitors, and staff.

<p align="center" width=180>
  <img src="diro/udemlogo.png">
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


---

© 2024 UMontreal InfoBoard | Built by Tidjani. All rights reserved.
