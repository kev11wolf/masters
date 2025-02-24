async function loadParticipants() {
    const response = await fetch('http://localhost:5000/participants');
    const participants = await response.json();
    const participantsList = document.getElementById('participantsList');
    participantsList.innerHTML = '';
    participants.forEach(participant => {
        const li = document.createElement('li');
        li.textContent = `${participant.name}: ${participant.picks.join(', ')}`;
        participantsList.appendChild(li);
    });
}

loadParticipants();
