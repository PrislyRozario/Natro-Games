function login(email, password) {
    $.ajax({
        type: "post",
        url: "/login",
        data: {
            email: email,
            password: password
        },
        success: (response) => {
            if (response.status === "success"){
                const myNotification = window.createNotification({
                    positionClass: 'nfc-top-right',
                    showDuration: 500,
                    theme: 'success'
                });
                myNotification({
                    title: 'Welcome',
                    message: 'Login Successful'
                });
                setTimeout(() => { location.replace("/")}, 500);
            }else {
                const myNotification = window.createNotification({
                    positionClass: 'nfc-top-right',
                    showDuration: 2500,
                    theme: 'warning'
                });
                myNotification({
                    title: 'Login Failed',
                    message: response.message
                });
            }
        },
        error: (error) => {

        }
    });
}