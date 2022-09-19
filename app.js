const inputBtn = document.querySelectorAll(".form-check-input")

inputBtn.forEach((e) => {

    let flag = true
    e.onclick = () => {

        if (flag) {
            e.parentElement.children[1].classList.add("checked")
            flag = false
            document.getElementById("num").innerText++
        } else {
            e.parentElement.children[1].classList.remove("checked")
            flag = true
            document.getElementById("num").innerText--
        }
    }
})

















// e.onclick() ? document.getElementsByTagName("label").classList.add("checked") : document.getElementsByTagName("label").classList.add(" ")