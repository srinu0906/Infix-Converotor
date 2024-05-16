function main()
{
    var input_type = document.getElementById("input").value;
    var output_type = document.getElementById("output").value;
    var infix,postfix,prefix,result;
    var valid = /[~!@#$%&_=,<>.?:;"'|/\\]/
    if(document.getElementById('input-field').value.match(valid))
        alert("Enter valid expression");
    else
    {

    try{

    if(input_type == "infix")
    {
        infix = document.getElementById('input-field').value;
        if(output_type == "infix")
        {
            result = infix_to_infix(infix);
        }
        else if(output_type == "postfix")
        {
            result = infix_to_postfix(infix);
        }   
        else if(output_type == "prefix")
        {
            result = infix_to_prefix(infix);
        }
    }

    if(input_type == "postfix")
    {
        postfix = document.getElementById('input-field').value;
        if(output_type == "infix")
        {
            result = postfix_to_infix(postfix);
        }
        else if(output_type == "postfix")
        {
            result = postfix_to_postfix(postfix);
        }   
        else if(output_type == "prefix")
        {
            result = postfix_to_prefix(postfix);
        }
    }

    if(input_type == "prefix")
    {
        prefix = document.getElementById('input-field').value;
        if(output_type == "infix")
        {
            result = prefix_to_infix(prefix);
        }
        else if(output_type == "postfix")
        {
            result = prefix_to_postfix(prefix);
        }   
        else if(output_type == "prefix")
        {
            result = prefix_to_prefix(prefix);
        }
    }
    document.getElementById("output-field").value = result;
    }

    catch(err)
    {
        alert(err);
    }
    }
}

function infix_to_infix(infix)
{
    return infix;
}

function infix_to_postfix(infix)
{
    var postfix ='';
    var stack =[],top=-1;
    const oprands = /[A-Za-z0-9]/;
    const operators = /[-+)^(/*]/;
    for(var ch of infix)
    {
        if (ch.match(oprands))
        {
            postfix += ch;
        }
        else if(ch.match(operators))
        {
            push(ch);
        }
    }
    while(top!= -1)
    {
        postfix += stack.pop();
        top--;
    }
    function push(c)
    {
        var temp;
        if(top == -1 || stack[top] == '(')
        {
            top++;
            stack[top]=c;
        }
        else
        {
            if(c == '(')
            {
                top++;
                stack[top] = c;
            }
            else if(getPriority(stack[top]) > getPriority(c))
            {
                top++;
                stack[top] = c;
            }

            else if(getPriority(stack[top]) <= getPriority(c))
            {
                top--;
                postfix += stack.pop();               
                push(c);
            }
            else if(c == ')')
            {
                while(stack[top] != '(')
                {
                    top--;
                    postfix += stack.pop();
                }
                top--;
                temp = stack.pop();
            }
        }
        function getPriority(char)
        {
            if(char == '^' || char =='*' || char =='/' )
                return 1;
            else if(char == '+' || char == '-')
                return 2;
        }
        
    }
    return postfix;
}
function infix_to_prefix(infix)
{
    var reverse_infix = reverse(infix);
    var postfix = infix_to_postfix(reverse_infix);
    var prefix = reverse(postfix);
    return prefix;
}

function postfix_to_infix(postfix)
{
    var stack =[],top=-1;
    const oprands = /[A-Za-z0-9]/;
    const operators = /[-+)^(/*]/;
    var exp,op1,op2 , infix;
    for(var ch of postfix)
    {
        if(ch.match(oprands))
        {
            top++;
            stack[top]=ch;
        }
        else if (ch.match(operators))
        {
            op1 = stack.pop();
            top--;
            op2 = stack.pop();
            top--;
            exp = op2 + ch + op1  ;
            top++;
            stack[top] = exp;
            
        }
    }
    infix = stack[top];
    return infix;
}

function postfix_to_postfix(postfix)
{
    return postfix;
}

function postfix_to_prefix(postfix)
{
    var infix = postfix_to_infix(postfix);
    var prefix = infix_to_prefix(infix);
    return prefix;
}

function prefix_to_infix(prefix)
{
    var postfix = reverse(prefix);
    var revese_infix = postfix_to_infix(postfix);
    var infix = reverse(revese_infix);
    return infix;
}

function prefix_to_postfix(prefix)
{
    var infix = prefix_to_infix(prefix);
    var postfix = infix_to_postfix(infix);
    return postfix;
}

function prefix_to_prefix(prefix)
{
    return prefix;
}

function reverse(exp)
{
    var reverse_exp_arr= exp.split('').reverse();
    var reverse_exp = '';
    for(var ch of reverse_exp_arr)
    {
        if(ch == '(')
            ch =')';
        else if(ch == ')')
            ch = '(';
        reverse_exp +=ch;
    }
    return reverse_exp;
}
