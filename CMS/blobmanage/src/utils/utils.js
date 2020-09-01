export default {
    formateDate(time) {
        if(!time) return ''
        let dates = new Date(time)
        let year = dates.getFullYear()
        let month = this.thanTen(dates.getMonth() + 1)
        let d = this.thanTen(dates.getDate())
        let h = this.thanTen(dates.getHours())
        let min = this.thanTen(dates.getMinutes())
        let s = this.thanTen(dates.getSeconds())
        return year + '-' + month + '-' + d +  ' ' + h + ':' + min + ':' + s
    },
    thanTen(value) {
        return value > 10 ? value : '0' +value
    }
}
