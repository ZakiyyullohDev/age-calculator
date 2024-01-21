const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const userAge = document.getElementById('age');
const submitBtn = document.getElementById('submitBtn');
const calculatedAge = document.getElementById('calculatedAge');

submitBtn.addEventListener("click", () => {
    const userAgeValue = Number(userAge.value);

    if (isNaN(userAgeValue) || userAgeValue <= 0) {
        // Foydalanuvchi yoshini noto'g'ri kiritgan
        alert("Iltimos, yoshingizni to'g'ri kiriting.");
    } else {
        const currentTime = new Date();
        const currentYear = currentTime.getFullYear();
        const editingAge = currentYear - userAgeValue;

        calculatedAge.textContent = `Hurmatli ${lastName.value} ${firstName.value}, siz ${editingAge}-yilsiz.`
    }
});
