function add() {
    ///////bu hissede 3 dene inputda ne yazilibsa hemen textleri oxuyuram
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var age = document.getElementById('age').value;
    ////////////////////////

    ////burda hansi elementin icinde append edecemse onu qeyd edirem
    var tbody = document.getElementById('append_in');

    //neyi yaratmaq istediyimi yaziram aralarda da td-nin icinde uygun textleri yaziram
    var add_element = '<tr><td>' + name + '</td><td>' + surname + '</td><td>' + age + '<td><tr>';




    //ala burdasan?he beynim islemir bu deqiqe:D beynini sikim. table-e men verende css niye goturmedki
    tbody.innerHTML += add_element;

}