function Error() {
    const currentError = localStorage.getItem("currentError");

    window.location.href = `${currentError}.html`;
}