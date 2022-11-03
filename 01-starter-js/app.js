

    function Write (text)
    {
        var textLabel = document.getElementById("display-div");
        var existingText = textLabel.innerHTML
        textLabel.innerHTML = text + '<br />' + existingText;
    }

    function OnClick ()
    {
        var input = document.getElementById("txt-input");
        Write(input.value);
    }

document.getElementById("btn-ok").addEventListener('click', OnClick);
