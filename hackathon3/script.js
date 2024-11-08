var _a;
// Listing Element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var EducationElement = document.getElementById('Education');
    var ExperienceElement = document.getElementById('Experience');
    var SkillsElement = document.getElementById('Skills');
    if (nameElement && emailElement && phoneElement && EducationElement && ExperienceElement && SkillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var Education = EducationElement.value;
        var Experience = ExperienceElement.value;
        var Skills = SkillsElement.value;
        // create resume output
        var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Name:</strong> ".concat(name_1, " </p>\n<p><strong>Email:</strong> ").concat(email, " </p>\n<p><strong>Phone:</strong> ").concat(phone, " </p>\n\n<h3>Education</h3>\n<p>").concat(Education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(Experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(Skills, "</p>\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output elements are missing');
        }
    }
    else {
        console.error('One or more output elements are missing');
    }
});
