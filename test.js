(function () {
  function injectPopupHTML() {
    var overlay = document.createElement("div");
    overlay.id = "popupOverlay";
    overlay.style.cssText = "display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9998;";
    
    var box = document.createElement("div");
    box.id = "popupBox";
    box.style.cssText = "display:none; position:fixed; top:30%; left:50%; transform:translate(-50%, -50%); background:#fff; border-radius:15px; padding:40px; z-index:9999; box-shadow:0 0 20px rgba(0,0,0,0.4); width:450px; text-align:center;";

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
    var popup = document.getElementById("popupBox");
    var overlay = document.getElementById("popupOverlay");
    var popupVisible = false;

    function showPopup() {
      if (!popupVisible) {
        popup.style.display = "block";
        overlay.style.display = "block";
        popupVisible = true;
      }
    }

    function closePopup() {
      popup.style.display = "none";
      overlay.style.display = "none";
      popupVisible = false;
    }

    function openPreview() {
      window.open("https://drive.google.com/file/d/1AUx2WTULXWvWtWXYasn4NmA__uRZWS2b/preview", "_blank");
    }

    document.getElementById("closePopupBtn").addEventListener("click", closePopup);
    document.getElementById("subscribeBtn").addEventListener("click", openPreview);

    document.addEventListener("mousemove", function triggerOnce() {
      showPopup();
      document.removeEventListener("mousemove", triggerOnce);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    injectPopupHTML();
    setTimeout(setupPopupLogic, 100); // popup load भइसकेपछि logic जोडिन्छ
  });
})();
