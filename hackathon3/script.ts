// Listing Element
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

// Type assertion

const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const EducationElement = document.getElementById('Education') as HTMLInputElement;
const ExperienceElement = document.getElementById('Experience') as HTMLInputElement;
const SkillsElement = document.getElementById('Skills') as HTMLInputElement;

if (nameElement && emailElement && phoneElement && EducationElement && ExperienceElement && SkillsElement){
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const Education = EducationElement.value;
    const Experience = ExperienceElement.value;
    const Skills = SkillsElement.value

    // create resume output

const resumeOutput = `
<h2>Resume</h2>
<p><strong>Name:</strong> ${name} </p>
<p><strong>Email:</strong> ${email} </p>
<p><strong>Phone:</strong> ${phone} </p>

<h3>Education</h3>
<p>${Education}</p>

<h3>Experience</h3>
<p>${Experience}</p>

<h3>Skills</h3>
<p>${Skills}</p>
`;
const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
} else {
    console.error('The resume output elements are missing')
}
} else {
    console.error('One or more output elements are missing')
}
})