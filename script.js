// JavaScript for attendance.html

// When the DOM has loaded, dynamically populate the student list
document.addEventListener('DOMContentLoaded', function () {
    const department = localStorage.getItem('department');
    const year = localStorage.getItem('year');
    const section = localStorage.getItem('section');

    const studentsList = document.getElementById('studentsList');

    // Check if we retrieved department, year, and section from localStorage
    if (!department || !year || !section) {
        console.error('No department, year, or section data found');
        return;
    }

    // Define student lists based on department, year, and section
    const studentsData = {
        'CSE': {
            '1st Year': {
                'A': ['John Doe', 'Jane Smith'],
                'B': ['Alice Brown', 'Tom Clark'],
                'C': ['Bob Johnson', 'Mary Lee']
            },
            '2nd Year': {
                'A': ['Michael Scott', 'Dwight Schrute'],
                'B': ['Jim Halpert', 'Pam Beesly'],
                'C': ['Ryan Howard', 'Kelly Kapoor']
            }
            // Add other years and sections...
        },
        'ECE': {
            '1st Year': {
                'A': ['Walter White', 'Jesse Pinkman'],
                'B': ['Saul Goodman', 'Skyler White'],
                'C': ['Hank Schrader', 'Gus Fring']
            }
            // Add other years and sections...
        }
        // Add more departments like MECH, CIVIL...
    };

    // Get the student list based on department, year, and section
    const students = studentsData[department]?.[year]?.[section];

    // If students are found, populate the table
    if (students && students.length > 0) {
        students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student}</td>
                <td>
                    <input type="radio" name="${student}" value="Present"> Present
                    <input type="radio" name="${student}" value="Absent"> Absent
                </td>
            `;
            studentsList.appendChild(row);
        });
    } else {
        console.error('No students found for this selection');
    }
});

// Function to handle attendance submission
function submitAttendance() {
    const department = localStorage.getItem('department');
    const year = localStorage.getItem('year');
    const section = localStorage.getItem('section');

    const studentsList = document.querySelectorAll('#studentsList tr');
    let attendanceData = `Attendance for ${department} - ${year} - ${section}:\n\n`;

    studentsList.forEach(row => {
        const studentName = row.querySelector('td').textContent;
        const status = row.querySelector('input[type="radio"]:checked');
        if (status) {
            attendanceData += `${studentName}: ${status.value}\n`;
        }
    });

    // Simulate sending the email (for real-world use, a backend service would be required)
    sendEmail(attendanceData);
}

// Function to send email (using mailto link)
function sendEmail(attendanceData) {
    const emailBody = `Attendance Report:\n\n${attendanceData}`;
    const mailtoLink = `mailto:mohan5307060@gmail.com?subject=Attendance Report&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
}
