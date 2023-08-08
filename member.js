function skillfunction() {
    var skill = document.getElementById("skill");
    var skillvalue = skill.options[skill.selectedIndex].value;
    var skilltext = skill.options[skill.selectedIndex].text;
    document.getElementById("skilltext").innerHTML = skilltext;
    document.getElementById("skillvalue").innerHTML = skillvalue;
}