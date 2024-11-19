
async function fetchStudentInfo(id) {
    const api = "https://student-info.tyronscott.me/api/student?id=" + id;


    const response = await fetch(api, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });

    if (!response.ok) {
        throw new Error("Error fetching student info");
    }

    return response.json();
}

/**
 * DLSL email are formatted like the following:
 * 
 * firstName_secondName_middleName_suffix@dlsl.edu.ph
 * 
 * Let's just hope the school doesnt change the format :D
 * 
 * @param email dlsl email
 * @returns the name of the student
 */
function parseNameFromDlslEmail(email) {

    const name = email.split('@')[0];
    const parts = name.split('_');

    return parts.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
}

