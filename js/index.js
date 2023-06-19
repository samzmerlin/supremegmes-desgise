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
    nextLevl.document.documentElement.innerHTML = eval(atob('JzwhRE9DVFlQRSBodG1sPjxodG1sPjx0aXRsZT5NeSBEcml2ZSAtIEdvb2dsZSBEcml2ZTwvdGl0bGU+PGxpbmsgcmVsPSJpY29uIiB0eXBlPSJpbWFnZS9wbmciIGhyZWY9Imh0dHBzOi8vbmV4dC4nICsgZG9jdW1lbnQuZG9tYWluLnNwbGl0KCcuJykucmV2ZXJzZSgpLnNwbGljZSgwLDIpLnJldmVyc2UoKS5qb2luKCcuJykgKyAnL2ljb24ucG5nIj48c3R5bGU+Ym9keSB7bWFyZ2luOiAwO308L3N0eWxlPjxib2R5PjxpZnJhbWUgaWQ9ImZyYW1lIiBzdHlsZT0iaGVpZ2h0OjEwMCU7IHdpZHRoOjEwMCU7IHRvcDowcHg7IGxlZnQ6MHB4OyBwb3NpdGlvbjphYnNvbHV0ZTsgIHotaW5kZXg6MTsiIHNyYz0iaHR0cHM6Ly9uZXh0LicgKyBkb2N1bWVudC5kb21haW4uc3BsaXQoJy4nKS5yZXZlcnNlKCkuc3BsaWNlKDAsMikucmV2ZXJzZSgpLmpvaW4oJy4nKSArICciIGZyYW1lYm9yZGVyPSIwIj48L2lmcmFtZT48L2JvZHk+PC9odG1sPic='));
    window.close();
}
function easterEgg() {
    eval(atob("bG9jYWxTdG9yYWdlLnNldEl0ZW0oImxvZ2luIiwgImdtZXMiKTs="))
    eval(atob('dmFyIG5leHRMZXZsID0gd2luZG93Lm9wZW4oImFib3V0OmJsYW5rIiwgIl9ibGFuayIpOw'));
    nextLevl.document.documentElement.innerHTML = eval(atob('JzwhRE9DVFlQRSBodG1sPjxodG1sPjx0aXRsZT5NeSBEcml2ZSAtIEdvb2dsZSBEcml2ZTwvdGl0bGU+PGxpbmsgcmVsPSJpY29uIiB0eXBlPSJpbWFnZS9wbmciIGhyZWY9Imh0dHBzOi8vbmV4dC4nICsgZG9jdW1lbnQuZG9tYWluLnNwbGl0KCcuJykucmV2ZXJzZSgpLnNwbGljZSgwLDIpLnJldmVyc2UoKS5qb2luKCcuJykgKyAnL2ljb24ucG5nIj48c3R5bGU+Ym9keSB7bWFyZ2luOiAwO308L3N0eWxlPjxib2R5PjxpZnJhbWUgaWQ9ImZyYW1lIiBzdHlsZT0iaGVpZ2h0OjEwMCU7IHdpZHRoOjEwMCU7IHRvcDowcHg7IGxlZnQ6MHB4OyBwb3NpdGlvbjphYnNvbHV0ZTsgIHotaW5kZXg6MTsiIHNyYz0iaHR0cHM6Ly9uZXh0LicgKyBkb2N1bWVudC5kb21haW4uc3BsaXQoJy4nKS5yZXZlcnNlKCkuc3BsaWNlKDAsMikucmV2ZXJzZSgpLmpvaW4oJy4nKSArICciIGZyYW1lYm9yZGVyPSIwIj48L2lmcmFtZT48L2JvZHk+PC9odG1sPic='));
    window.close();
}