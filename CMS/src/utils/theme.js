
 function setTheme(theme) {
//    error
    switch (theme) {
        case 'red':
             require('../style/red.less')
        break
        default: 
        break
    }
}

export default setTheme