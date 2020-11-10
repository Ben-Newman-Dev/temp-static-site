function SVGOver(item, state) {
    if (state === 0) {
        let fileName = item.src.replace(/^.*[\\\/]/, '')
        item.src = `./assets/images/links/${fileName}`;
    }

    if (state === 1) {
        let fileName = item.src.replace(/^.*[\\\/]/, '')
        item.src = `./assets/images/links/unfocused/${fileName}`;
    }

}