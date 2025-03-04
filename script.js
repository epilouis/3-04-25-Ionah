function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        section.classList.add('fade-in');
    } else {
        section.classList.add('hidden');
        section.classList.remove('fade-in');
    }
}

function toggleSecret() {
    const secret = document.getElementById('secret');
    if (secret.classList.contains('hidden')) {
        secret.classList.remove('hidden');
        secret.classList.add('reveal');
    } else {
        secret.classList.add('hidden');
        secret.classList.remove('reveal');
    }
}