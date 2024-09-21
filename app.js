// Function to handle details submission from index.html
function submitDetails(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    
    const department = document.getElementById('department').value;
    const year = document.getElementById('year').value;
    const section = document.getElementById('section').value;
    
    // Store details in localStorage
    localStorage.setItem('department', department);
    localStorage.setItem('year', year);
    localStorage.setItem('section', section);
    
    // Redirect to attendance.html
    window.location.href = 'attendance.html';
}

// Function to load and display student details in attendance.html
window.onload = function() {
    const studentDetails = document.getElementById('studentDetails');
    const studentsList = document.getElementById('studentsList');

    // Retrieve details from localStorage
    const department = localStorage.getItem('department');
    const year = localStorage.getItem('year');
    const section = localStorage.getItem('section');

    if (!department || !year || !section) {
        alert("Missing details! Please go back and fill in the form.");
        return;
    }

    // Display department, year, and section
    

    // Example student list
    const students = [
        'Alice Johnson',
        'Bob Smith',
        'Charlie Brown',
        'David Williams',
        'Emma Davis',
        'Frank Harris',
        'Grace Lee',
        'Helen Clark',
        'Isaac Wright',
        'John Martin'
    ];

    // Create a row for each student
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student}</td>
            <td><input type="radio" name="${student}" value="Present"></td>
            <td><input type="radio" name="${student}" value="Absent"></td>
        `;
        studentsList.appendChild(row);
    });
};

// Function to handle attendance submission
function submitAttendance() {
    const students = [
        'Alice Johnson',
        'Bob Smith',
        'Charlie Brown',
        'David Williams',
        'Emma Davis',
        'Frank Harris',
        'Grace Lee',
        'Helen Clark',
        'Isaac Wright',
        'John Martin'
    ];

    const attendanceData = {};

 
    console.log('Attendance Data:', attendanceData);
    alert('Attendance Submitted!');
}