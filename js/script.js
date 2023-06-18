var bigPic = document.querySelector("#big"); // 큰사진
    var smallPics = document.querySelectorAll(".small"); // 작은사진(여러개)

    for (var i = 0; i < smallPics.length; i++) {
      smallPics[i].addEventListener("click", changepic); // 이벤트 처리
    }

    function changepic() {
      // 사진 바꾸는 함수
      var smallPicAttribute = this.getAttribute("src");
      bigPic.setAttribute("src", smallPicAttribute);
    }

    // 선택한 사진 제외하곤 투명하게 조정하는 함수
    function showImage(element) {
      const thumbnails = document.querySelectorAll(".small");
      thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove("active");
      });
      element.classList.add("active");
    }

    // up, down button에 따른 주문량 개수 변화하는 함수
    const upBtn = document.querySelector('.up_btn');
    const downBtn = document.querySelector('.down_btn');
    const input = document.querySelector('#order_qty');

    upBtn.addEventListener('click', () => {
      input.value = parseInt(input.value) + 1;
      calculateOrderTotal();
    });
    downBtn.addEventListener('click',() => {
      input.value = parseInt(input.value) -1;
      if (input.value < 1) {
        input.value = 1;
      }
      calculateOrderTotal();
    })

    // 주문 금액 계산하는 함수
    function calculateOrderTotal() {
      const orderQty = parseInt(input.value);
      const price = 30000;
      const orderTotal = orderQty * price;
      const orderTotalElement = document.getElementById('order_total');
      orderTotalElement.textContent = '주문 금액 : ' + orderTotal.toLocaleString() + '원';
    }

    input.addEventListener('input',calculateOrderTotal);