function skillfunction() {
    var skill = document.getElementById("skill");
    var skillsMember = document.getElementById("skillsmember");
    var skillvalue = skill.options[skill.selectedIndex].value;
    var skilltext = skill.options[skill.selectedIndex].text;
    document.getElementById("skillvalue").value = skillvalue;
    document.getElementById("skilltext").value = skilltext;
}