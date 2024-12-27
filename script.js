document.getElementById('addBtn').addEventListener('click', function () {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    if (!num1 || !num2) {
        document.getElementById('result').textContent = 'Error: Both inputs are required.';
        return;
    }

    // Mistake: Treat num1 and num2 as strings, leading to concatenation instead of addition
    const sum = num1 + num2; // This will concatenate strings, e.g., "5" + "3" = "53"
    document.getElementById('result').textContent = `Result: ${num1} + ${num2} = ${sum}`;
});
