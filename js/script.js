const app = document.getElementById("app");
const appVue = new Vue({
    el: app,
    data: {
        message: "Hello Vue.Js !",
        googleLink: "https://www.google.fr/",
        loggedIn: true,
        users: null,
        success: false,
        loading: false,
        userEmail: "",
        userPassword: "",
        userCheckMeOut: false,
        authErrors: {
            error: false,
            msg: ""
        }
    },
    methods: {
        showAlert: function () {
            alert("You clicked the alert button !");
        },
        fetchUsers: async function () {
            this.loading = true;

            try {
                if(this.users) { // resetting when the user is clicking again
                    this.users = null;
                }

                const data = await fetch("https://jsonplaceholder.typicode.com/users");
                const jsonData = await data.json();
    
                this.loading = false;
                this.users = jsonData;
            }
            
            catch (err) {
                console.log("error while retrieving data.");
                console.log(err);
            }
        },
        navToGoogle: function() {
            window.open(this.googleLink, "_blank");
        },
        authUser: function(e) {
            e.preventDefault();

            if(this.userPassword !== "1234") {
                console.log("if");

                this.authErrors.error = true;
                this.authErrors.msg = "Incorrect password"
            }

            else {
                this.authErrors = false;
                this.authErrors.msg = "";
                
                alert(`Welcome ${this.userEmail} !`);
            }
        }
    }
});