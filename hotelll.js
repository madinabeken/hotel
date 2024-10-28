// ... Бұрынғы код сол қалпы қалады

// Брондау нәтижелерін көрсету функциясы
function displayRooms(rooms, days, requestedDates) {
    const roomList = document.getElementById("roomList");
    roomList.innerHTML = "";
  
    if (rooms.length === 0) {
      roomList.innerHTML = "<p>Таңдалған параметрлерге сәйкес бөлмелер табылмады.</p>";
      return;
    }
  
    rooms.forEach((room) => {
      const totalCost = room.price * days;  // Жалпы бағаны есептеу
      const roomItem = document.createElement("div");
      roomItem.classList.add("room-item");
  
      // Бағасы мен жалпы құнын қосып көрсету
      roomItem.innerHTML = `
        <h3>${room.type.charAt(0).toUpperCase() + room.type.slice(1)} бөлмесі</h3>
        <p>Бағасы: $${room.price} / тәулік</p>
        <p>Күн саны: ${days}</p>
        <p>Жалпы құны: $${totalCost}</p>
        <button onclick="bookRoom(${room.id}, '${room.type}', ${days}, '${requestedDates.join(", ")}')">Брондау</button>
      `;
      roomList.appendChild(roomItem);
    });
  }
  
  // ... Қалған код сол қалпы қалады
  