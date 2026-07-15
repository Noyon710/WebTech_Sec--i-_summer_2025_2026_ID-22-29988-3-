  var form = document.getElementById("studentForm");
        var table = document.getElementById("studentTable");

            form.addEventListener("submit", function(event){

        event.preventDefault();

            var fname = document.getElementById("fname").value;
            var lname = document.getElementById("lname").value;
            var sid = document.getElementById("sid").value;
            var email = document.getElementById("email").value;
            var credit = document.getElementById("credit").value;
            var dept = document.getElementById("dept").value;

        if(fname.trim() == ""){
            alert("First Name is required");
                return;
        }

            if(lname.trim() == ""){
                alert("Last Name is required");
                        return;
        }

            if(sid.indexOf("-") == -1){
                alert("Student ID must contain -");
                        return;
        }

            if(email.indexOf("@student.aiub.edu") == -1){
                alert("Invalid Email");
                        return;
        }

            if(credit == "" || credit < 0 || credit >= 148){
                alert("Credit must be between 0 and 147");
                        return;
        }

        if(dept == ""){
            alert("Select Department");
            return;
        }

            var row = table.insertRow();

            var c1 = row.insertCell(0);
            var c2 = row.insertCell(1);
            var c3 = row.insertCell(2);
            var c4 = row.insertCell(3);
            var c5 = row.insertCell(4);

            c1.innerHTML = fname + " " + lname;
            c2.innerHTML = sid;
            c3.innerHTML = email;
            c4.innerHTML = credit;
            c5.innerHTML = dept;

            form.reset();

        });