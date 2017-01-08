export const phone = (number) => {
    if (!number) return ''
    number = number.toString().replace(/[^\d]/g,'').substring(0,10)
    var reFull = /(\d{3})(\d{3})(\d{1,4})/
    var reHalf = /(\d{3})(\d{1,3})/
    var reStart = /(\d{3})\d+/
    if (reFull.test(number)) return number.replace(reFull, "($1) $2-$3")
    else if (reHalf.test(number)) return number.replace(reHalf, "($1) $2")
    else if (reStart.test(number)) {
        console.log('start passed')
        return number.replace(reStart, "($1)")
    }
    return number
}