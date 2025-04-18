(function () {
  function injectPopupHTML() {
    var overlay = document.createElement("div");
    overlay.id = "popupOverlay";
    overlay.style.cssText = "display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9998;";
    
    var box = document.createElement("div");
    box.id = "popupBox";
    box.style.cssText = "display:none; position:fixed; top:30%; left:50%; transform:translate(-50%, -50%); background:#fff; border-radius:15px; padding:40px; z-index:9999; box-shadow:0 0 20px rgba(0,0,0,0.4); width:90%; max-width:450px; text-align:center;";

    box.innerHTML = `
      <p style="margin:0; font-size:22px; line-height:1.5;">
        🎉 Please, Renew Subscriptions!<br>
        <strong>Nawalpur Samaj South Korea</strong>
      </p>
      <button id="closePopupBtn" style="margin-top:20px; padding:10px 25px; font-size:16px; border-radius:5px;">Close</button>
      <button id="subscribeBtn" style="margin-top:20px; padding:10px 25px; font-size:16px; background-color:green; color:white; border:none; border-radius:5px;">Subscription</button>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(box);
  }

  function setupPopupLogic() {
    var tryCount = 0;
    var maxTries = 10;

    function attachHandlers() {
      var popup = document.getElementById("popupBox");
      var overlay = document.getElementById("popupOverlay");
      var closeBtn = document.getElementById("closePopupBtn");
      var subBtn = document.getElementById("subscribeBtn");

      if (popup && overlay && closeBtn && subBtn) {
        closeBtn.addEventListener("click", function () {
          popup.style.display = "none";
          overlay.style.display = "none";
        });

        subBtn.addEventListener("click", function () {
          window.open("https://drive.google.com/file/d/1AUx2WTULXWvWtWXYasn4NmA__uRZWS2b/preview", "_blank");
        });

        document.addEventListener("mousemove", function triggerOnce() {
          popup.style.display = "block";
          overlay.style.display = "block";
          document.removeEventListener("mousemove", triggerOnce);
        });
      } else if (tryCount < maxTries) {
        tryCount++;
        setTimeout(attachHandlers, 100); // retry after 100ms
      }
    }

    attachHandlers();
  }

  document.addEventListener("DOMContentLoaded", function () {
    injectPopupHTML();
    setTimeout(setupPopupLogic, 100); // popup load भइसकेपछि logic जोडिन्छ
  });
})();
