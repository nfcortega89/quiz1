    var list = [];
$('.preview').hide();
    var Person = function(firstname, lastname, phonenumber, street, city, state) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
        this.street = street;
        this.city = city;
        this.state = state;
    }
    Person.prototype.print = function() {
        // 		/// you can use this in a function
        console.log(this.firstname + this.lastname);
    }

    $(document).ready(function() {

        $('.submit').on('click', function() {
            var person = new Person();
            person.firstname = $('.firstname').val();
            person.lastname = $('.lastname').val();
            person.phonenumber = $('.phonenumber').val();
            person.street = $('.street').val();
            person.city = $('.city').val();
            person.state = $('.state').val();
            $('.preview').show();
            $('.preview h1').text(person.firstname + " " + person.lastname);
            $('.li1').text("First Name: " + person.firstname);
            $('.li2').text("Last Name: " + person.lastname);
            $('.li3').text("Phone Number: " + person.phonenumber);
            $('.li4').text("Address: " + person.street + ", " + person.city + ", " + person.state);
            $('.contactlist ul').append('<li>' + person.firstname + " " + person.lastname + '</li>');
            console.log(person);
            list.push(person);
        });

    })
