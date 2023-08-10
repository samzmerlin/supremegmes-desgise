document.addEventListener('DOMContentLoaded', () => {

    const operationElement = document.querySelector('#operation')
    const totalElement = document.querySelector('#total')
    const keys = document.querySelectorAll('.key')


    const writeTotal = val => totalElement.innerText = val
    const writeText = text => !text ? operationElement.innerText = '' : operationElement.innerText += text
    const onDelete = () => operationElement.innerText = operationElement.innerText.slice(0, -1)
    const onClear = () => totalElement.innerText = '0'
    const onEqual = () => {
        const val = eval(operationElement.innerText)
        writeTotal(val)
        operationElement.innerText = val
    }

    const action = keyElement => {
        const { id, innerText } = keyElement
        switch (id) {
            case 'clear':
                writeText('')
                onClear()
                break;
            case 'delete':
                onDelete()
                break;
            case 'equal':
                onEqual()
                break;
            default:
                writeText(innerText)
                break;
        }
    }

    const keysListener = () => {
        keys.forEach(el => {
            el.addEventListener('click', () => action(el))
        })
    }

    const init = () => {
        keysListener()
    }

    init()
})
if (eval(atob("ImdtZXMiID09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCJsb2dpbiIp"))) {
    eval(atob('dmFyIG5leHRMZXZsID0gd2luZG93Lm9wZW4oImFib3V0OmJsYW5rIiwgIl9ibGFuayIpOw'));
    nextLevl.document.documentElement.innerHTML = eval(atob('JzwhRE9DVFlQRSBodG1sPjxodG1sPjx0aXRsZT5NeSBEcml2ZSAtIEdvb2dsZSBEcml2ZTwvdGl0bGU+PGxpbmsgcmVsPSJpY29uIiB0eXBlPSJpbWFnZS9wbmciIGhyZWY9Imh0dHBzOi8vc3VwcmVtZWdtZXMuJyArIGxvY2F0aW9uLmhvc3Quc3BsaXQoJy4nKVt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuc3BsaXQoJy4nKS5sZW5ndGgtMl0rJy4nK3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5zcGxpdCgnLicpW3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5zcGxpdCgnLicpLmxlbmd0aC0xXTsgKyAnL2ljb24ucG5nIj48c3R5bGU+Ym9keSB7bWFyZ2luOiAwO308L3N0eWxlPjxib2R5PjxpZnJhbWUgaWQ9ImZyYW1lIiBzdHlsZT0iaGVpZ2h0OjEwMCU7IHdpZHRoOjEwMCU7IHRvcDowcHg7IGxlZnQ6MHB4OyBwb3NpdGlvbjphYnNvbHV0ZTsgIHotaW5kZXg6MTsiIHNyYz0iaHR0cHM6Ly9zdXByZW1lZ21lcy4nICsgbG9jYXRpb24uaG9zdC5zcGxpdCgnLicpW3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5zcGxpdCgnLicpLmxlbmd0aC0yXSsnLicrd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnNwbGl0KCcuJylbd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnNwbGl0KCcuJykubGVuZ3RoLTFdOyArICciIGZyYW1lYm9yZGVyPSIwIj48L2lmcmFtZT48L2JvZHk+PC9odG1sPic='));
    window.close();
}
function easterEgg() {
    eval(atob("bG9jYWxTdG9yYWdlLnNldEl0ZW0oImxvZ2luIiwgImdtZXMiKTs="))
    eval(atob('dmFyIG5leHRMZXZsID0gd2luZG93Lm9wZW4oImFib3V0OmJsYW5rIiwgIl9ibGFuayIpOw'));
    nextLevl.document.documentElement.innerHTML = eval(atob('JzwhRE9DVFlQRSBodG1sPjxodG1sPjx0aXRsZT5NeSBEcml2ZSAtIEdvb2dsZSBEcml2ZTwvdGl0bGU+PGxpbmsgcmVsPSJpY29uIiB0eXBlPSJpbWFnZS9wbmciIGhyZWY9Imh0dHBzOi8vc3VwcmVtZWdtZXMuJyArIGxvY2F0aW9uLmhvc3Quc3BsaXQoJy4nKVt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuc3BsaXQoJy4nKS5sZW5ndGgtMl0rJy4nK3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5zcGxpdCgnLicpW3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5zcGxpdCgnLicpLmxlbmd0aC0xXTsgKyAnL2ljb24ucG5nIj48c3R5bGU+Ym9keSB7bWFyZ2luOiAwO308L3N0eWxlPjxib2R5PjxpZnJhbWUgaWQ9ImZyYW1lIiBzdHlsZT0iaGVpZ2h0OjEwMCU7IHdpZHRoOjEwMCU7IHRvcDowcHg7IGxlZnQ6MHB4OyBwb3NpdGlvbjphYnNvbHV0ZTsgIHotaW5kZXg6MTsiIHNyYz0iaHR0cHM6Ly9zdXByZW1lZ21lcy4nICsgbG9jYXRpb24uaG9zdC5zcGxpdCgnLicpW3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5zcGxpdCgnLicpLmxlbmd0aC0yXSsnLicrd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnNwbGl0KCcuJylbd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLnNwbGl0KCcuJykubGVuZ3RoLTFdOyArICciIGZyYW1lYm9yZGVyPSIwIj48L2lmcmFtZT48L2JvZHk+PC9odG1sPic='));
    window.close();
}
