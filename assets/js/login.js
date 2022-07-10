$("#loginForm").submit(function (event) {
  let nim = $("#nim").val();

  let password = $("#password").val();

  let data = {
    nim: nim,
    password: password,
  };

  event.preventDefault();

  $.ajax({
    type: "GET",
    url: "./data/login.json",
    dataType: "json",
    success: function (result) {
      let parseData = result.data;
      console.log(parseData.admin1.nim);
      if ((parseData.admin1.nim === data.nim && parseData.admin1.password === data.password) || (parseData.admin2.nim === data.nim && parseData.admin2.password === data.password)) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        setTimeout(() => {
          location.replace("./index.html");
          localStorage.setItem("nim", data.nim);
        }, 2000);
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: "Gagal Maszeh!",
        });
      }
    },
    error: function () {
      console.log("gagal");
    },
  });
});
