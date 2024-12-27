document.getElementById('addBtn').addEventListener('click', function () {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    if (!num1 || !num2) {
        document.getElementById('result').textContent = 'Error: Both inputs are required.';
        return;
    }
    const sum = num1 + num2;
    document.getElementById('result').textContent = `Result: ${num1} + ${num2} = ${sum}`;
});

// Expected Output: "Result: 5 + 3 = 8"
// Actual Output: "Result: 5 + 3 = 53"



