$(".eye-icon").click(() => {
    if ($(".eye-icon").hasClass("fa-eye-slash")) {
        $(".eye-icon").removeClass("fa-eye-slash").addClass("fa-eye");
        $(".pass").attr("type", "text");
    } else {
        $(".eye-icon").removeClass("fa-eye").addClass("fa-eye-slash");
        $(".pass").attr("type", "password");
    }
});
console.log("hi");