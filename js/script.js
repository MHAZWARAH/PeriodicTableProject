$(document).ready(function() {

  /* النوافذ المنبثقة*/
  $(".element").click(function(e)
  {
    e.preventDefault();
    var target = $(this).attr("href");
    $(".popup").fadeOut(200);
    $(target).fadeIn(300);
  });

  $(".close").click(function(e) {
    e.preventDefault();
    $(this).closest(".popup").fadeOut(300);
  });

  $(document).mouseup(function(e) {
    var popup = $(".popup");
    if (!popup.is(e.target) && popup.has(e.target).length === 0) {
      popup.fadeOut(300);
    }
  });

  /* Toast Notification */
  function showToast(message, type = "info") {
    let toast = $('<div class="toast"></div>').text(message);

    if (type === "success") toast.addClass("toast-success");
    if (type === "error") toast.addClass("toast-error");
    if (type === "warning") toast.addClass("toast-warning");

    $("body").append(toast);
    toast.fadeIn(300);

    setTimeout(function() {
      toast.fadeOut(500, function() {
        $(this).remove();
      });
    }, 3000);
  }

  /* التحقق من صحة النموذج*/
  $("#contactForm").on("submit", function(e) {
    e.preventDefault();

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let message = $("#message").val().trim();
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || message === "") {
      showToast("⚠️ يرجى ملء جميع الحقول", "warning");
      return;
    }

    if (!email.match(emailPattern)) {
      showToast("⚠️ البريد الإلكتروني غير صالح", "error");
      return;
    }

    showToast("✅ تم إرسال النموذج بنجاح!", "success");
    this.reset();
  });

 
 
});
