// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get form values
    const situation = document.getElementById('situation').value;
    const thoughts = document.getElementById('thoughts').value;
    const emotions = document.getElementById('emotions').value;
    const evidenceFor = document.getElementById('evidence-for').value;
    const evidenceAgainst = document.getElementById('evidence-against').value;
    const alternativeThoughts = document.getElementById('alternative-thoughts').value;
    const newEmotions = document.getElementById('new-emotions').value;
    const actionPlan = document.getElementById('action-plan').value;
  
    // Create thought record object
    const thoughtRecord = {
      situation,
      thoughts,
      emotions,
      evidenceFor,
      evidenceAgainst,
      alternativeThoughts,
      newEmotions,
      actionPlan
    };
  
    // Save thought record to local storage
    saveThoughtRecord(thoughtRecord);
  
    // Clear form inputs
    document.getElementById('thought-record-form').reset();
  
    // Display thought records
    displayThoughtRecords();
  }
  
  // Function to save thought record to local storage
  function saveThoughtRecord(thoughtRecord) {
    let thoughtRecords = [];
  
    if (localStorage.getItem('thoughtRecords')) {
      thoughtRecords = JSON.parse(localStorage.getItem('thoughtRecords'));
    }
  
    thoughtRecords.push(thoughtRecord);
    localStorage.setItem('thoughtRecords', JSON.stringify(thoughtRecords));
  }
  
  // Function to display thought records
  function displayThoughtRecords() {
    const thoughtRecordList = document.getElementById('thought-record-list');
    thoughtRecordList.innerHTML = '';
  
    if (localStorage.getItem('thoughtRecords')) {
      const thoughtRecords = JSON.parse(localStorage.getItem('thoughtRecords'));
  
      thoughtRecords.forEach((thoughtRecord, index) => {
        const thoughtRecordItem = document.createElement('div');
        thoughtRecordItem.classList.add('thought-record-item');
  
        const title = document.createElement('h3');
        title.textContent = `Thought Record ${index + 1}`;
  
        const situation = document.createElement('p');
        situation.innerHTML = `<strong>Situation:</strong> ${thoughtRecord.situation}`;
  
        const thoughts = document.createElement('p');
        thoughts.innerHTML = `<strong>Thoughts:</strong> ${thoughtRecord.thoughts}`;
  
        const emotions = document.createElement('p');
        emotions.innerHTML = `<strong>Emotions:</strong> ${thoughtRecord.emotions}`;
  
        const evidenceFor = document.createElement('p');
        evidenceFor.innerHTML = `<strong>Evidence For:</strong> ${thoughtRecord.evidenceFor}`;
  
        const evidenceAgainst = document.createElement('p');
        evidenceAgainst.innerHTML = `<strong>Evidence Against:</strong> ${thoughtRecord.evidenceAgainst}`;
  
        const alternativeThoughts = document.createElement('p');
        alternativeThoughts.innerHTML = `<strong>Alternative Thoughts:</strong> ${thoughtRecord.alternativeThoughts}`;
  
        const newEmotions = document.createElement('p');
        newEmotions.innerHTML = `<strong>New Emotions:</strong> ${thoughtRecord.newEmotions}`;
  
        const actionPlan = document.createElement('p');
        actionPlan.innerHTML = `<strong>Action Plan:</strong> ${thoughtRecord.actionPlan}`;
  
        thoughtRecordItem.appendChild(title);
        thoughtRecordItem.appendChild(situation);
        thoughtRecordItem.appendChild(thoughts);
        thoughtRecordItem.appendChild(emotions);
        thoughtRecordItem.appendChild(evidenceFor);
        thoughtRecordItem.appendChild(evidenceAgainst);
        thoughtRecordItem.appendChild(alternativeThoughts);
        thoughtRecordItem.appendChild(newEmotions);
        thoughtRecordItem.appendChild(actionPlan);
  
        thoughtRecordList.appendChild(thoughtRecordItem);
      });
    }
  }
  
  // Event listener for form submission
  document.getElementById('thought-record-form').addEventListener('submit', handleFormSubmit);
  
  // Display thought records on page load
  displayThoughtRecords();
  
