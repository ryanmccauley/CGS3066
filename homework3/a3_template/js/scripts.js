const result = document.getElementById('result')

const sizeButton = document.getElementById('size_btn')

sizeButton.onclick = (e) => {
    const height = document.getElementById('height'), width = document.getElementById('width')

    result.style.height = height.value + 'px'
    result.style.width = width.value + 'px'
}

const changeColors = document.getElementById('colors_btn')

changeColors.onclick = (e) => {
    const colorsContainer = document.getElementById('colors_container')

    const colors = []

    for (const child of colorsContainer.children) {
        const input = child.children[1]
        colors.push(input.value)
    }

    updateColors(colors)
}

function updateColors(colors) {

    // remove children
    while (result.hasChildNodes()) {
        result.removeChild(result.childNodes.item(0))
    }

    for (const color of colors) {
        const newChild = document.createElement('div')
        newChild.style.height = (result.clientHeight / colors.length) + 'px'
        newChild.style.backgroundColor = color
        result.appendChild(newChild)
    }

}

const borderButton = document.getElementById('border_btn')

borderButton.onclick = (e) => {
    const type = document.getElementById('border_type'), color = document.getElementById('border_color'),
        width = document.getElementById('border_width')

    result.style.border = width.value + 'px ' + type.value.toLowerCase() + ' ' + color.value
}