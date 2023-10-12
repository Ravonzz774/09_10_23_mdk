var $burgerElements = $(".header-burger-button, .header-burger-main, .header-burger");

document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Предотвращаем отправку формы

  var query = document.getElementById("searchInput").value; // Получаем значение поискового запроса

  var elements = document.querySelectorAll("body p, body h1, body h2, body h3, body span"); // Находим все <p>, <h1>, <h2>, <h3> и <span> элементы на странице

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    if (element.innerText.toLowerCase().includes(query.toLowerCase())) {
      // Проверяем, содержит ли элемент текст, соответствующий поисковому запросу
      var innerHTML = element.innerHTML;
      var startIndex = innerHTML.toLowerCase().indexOf(query.toLowerCase());
      var endIndex = startIndex + query.length;
      var highlightedText =
        '<span class="highlight">' +
        innerHTML.substring(startIndex, endIndex) +
        "</span>";

      element.innerHTML =
        innerHTML.substring(0, startIndex) +
        highlightedText +
        innerHTML.substring(endIndex);
      element.scrollIntoView(); // Прокручиваем страницу к найденному элементу
      $burgerElements.removeClass("open");
      setTimeout(function() {
        elements_hgh = document.querySelectorAll(".highlight");
        elements_hgh.forEach((element_hgh) => {
          element_hgh.classList.remove("highlight");
        });
        console.log("timeout");
      }, 4000);
    }
  }
});