function createRipple(event) {
    const button = event.currentTarget;
  
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
  
    const ripple = button.getElementsByClassName("ripple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
  }
  
  const buttons = document.getElementsByTagName("button");
  for (const button of buttons) {
    button.addEventListener("click", createRipple);
  }

  $('#choix-1-list').on('click', function (e) {
    e.preventDefault()
    $('#choix-1-list').addClass('show').addClass('active').siblings().removeClass('show').removeClass('active');
    $('#choix-1').addClass('show').addClass('active').siblings().removeClass('show').removeClass('active');
})

$('#choix-2-list').on('click', function (e) {
    e.preventDefault()
    $('#choix-2-list').addClass('show').addClass('active').siblings().removeClass('show').removeClass('active');
    $('#choix-2').addClass('show').addClass('active').siblings().removeClass('show').removeClass('active');
})

$('#oui-form').on('click', function () {
    $('#choix-2-bis').addClass('show').addClass('active').addClass('display');
    $("input[type=checkbox]").attr("checked",!toggle);
    toggle = !toggle;
})

$('#non-form').on('click', function () {
    $('#choix-2-bis').removeClass('show').removeClass('active').removeClass('display').addClass('display-none');
    $("input[type=checkbox]").attr("checked",!toggle);
    toggle = !toggle;
})

$('#oui-form-3').on('click', function () {
    $('#choix-2-bis-bis').addClass('show').addClass('active').addClass('display');
    $("input[type=checkbox]").attr("checked",!toggle);
    toggle = !toggle;
})

$('#non-form-3').on('click', function () {
    $('#choix-2-bis-bis').removeClass('show').removeClass('active').removeClass('display').addClass('display-none');
    $("input[type=checkbox]").attr("checked",!toggle);
    toggle = !toggle;
})

$('#oui-form-4').on('click', function () {
    $('#choix-3-bis').addClass('show').addClass('active').addClass('display');
    $("input[type=checkbox]").attr("checked",!toggle);
    toggle = !toggle;
})

$('#non-form-4').on('click', function () {
    $('#choix-3-bis').removeClass('show').removeClass('active').removeClass('display').addClass('display-none');
    $("input[type=checkbox]").attr("checked",!toggle);
    toggle = !toggle;
})

$('#choix-3-list').on('click', function (e) {
    e.preventDefault()
    $('#choix-3-list').addClass('show').addClass('active').siblings().removeClass('show').removeClass('active');
    $('#choix-3').addClass('show').addClass('active').siblings().removeClass('show').removeClass('active');
})

$('#choix-4-list').on('click', function (e) {
    e.preventDefault()
    $('#choix-4-list').addClass('show').addClass('active').siblings().removeClass('show').removeClass('active');
    $('#choix-4').addClass('show').addClass('active').siblings().removeClass('show').removeClass('active');
})

$('#oui-form-5').on('click', function () {
    $('#choix-4-bis').addClass('show').addClass('active').addClass('display');
    $("input[type=checkbox]").attr("checked",!toggle);
    toggle = !toggle;
})

$('#non-form-5').on('click', function () {
    $('#choix-4-bis').removeClass('show').removeClass('active').removeClass('display').addClass('display-none');
    $("input[type=checkbox]").attr("checked",!toggle);
    toggle = !toggle;
})

$('#choix-5-list').on('click', function (e) {
    e.preventDefault()
    $('#choix-5-list').addClass('show').addClass('active').siblings().removeClass('show').removeClass('active');
    $('#choix-5').addClass('show').addClass('active').siblings().removeClass('show').removeClass('active');
})