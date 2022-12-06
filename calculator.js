var answer = document.getElementById("Answer");


function EnterNumber(number)
{
    answer.value += number;
}

function EnterEqual()
{
    answer.value = eval(answer.value);
}

function EnterOperator(operator)
{
    answer.value += operator;
}

function EnterClear()
{
    answer.value = "";
}
